import React from 'react';
import { players } from 'data/players';
import PlayersListItem from 'components/PlayersListItem/PlayersListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const PlayersList = () => (
  <Wrapper>
    <StyledList>
      {players.map((userData) => (
        <PlayersListItem userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default PlayersList;
