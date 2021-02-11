const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express();
const { spawn } = require('child_process');

async function playersUnderstatStats(req, res, next) {
  try {
    let dataToSend = '';

    const python = spawn('python3', ['./scripts/understat.py']);
    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script...');
      dataToSend += data.toString();
    });

    python.on('close', (code) => {
      console.log(`Child process close all stdio with code ${code}`);
      res.json(JSON.parse(dataToSend));
    });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

async function teamsPLInfo(req, res, next) {
  try {
    let dataToSend = '';

    const python = spawn('python3', ['./scripts/teams.py']);
    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script...');
      dataToSend += data.toString();

      // MAKE STRING A VALID JSON
      dataToSend = '[' + dataToSend.replace(/}\s{/g, '},{') + ']';
    });

    python.on('close', (code) => {
      console.log(`Child process close all stdio with code ${code}`);
      res.json(JSON.parse(dataToSend));
    });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

async function playersPLInfo(req, res, next) {
  try {
    let dataToSend = '';

    const python = spawn('python3', ['./scripts/players.py']);
    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script...');
      dataToSend += data.toString();
    });

    python.on('close', (code) => {
      console.log(`Child process close all stdio with code ${code}`);
      res.json(JSON.parse(dataToSend));
    });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

app.use(cors());

app.get('/playersStats', playersUnderstatStats);
app.get('/players', playersPLInfo);
app.get('/teams', teamsPLInfo);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
