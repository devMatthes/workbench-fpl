import React from 'react';
import PlayersList from 'components/PlayersList/PlayersList';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgb(55, 0, 60);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = (props) => (
  <Wrapper>
    <PlayersList />
  </Wrapper>
);

export default Root;
