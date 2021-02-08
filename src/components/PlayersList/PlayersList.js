import React from 'react';
import { players } from 'data/players';
import PlayersListItem from 'components/PlayersListItem/PlayersListItem';

const PlayersList = () => (
  <div>
    <ul>
      {players.map((userData) => (
        <PlayersListItem userData={userData} />
      ))}
    </ul>
  </div>
);

export default PlayersList;
