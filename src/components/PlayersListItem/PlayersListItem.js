import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

const PlayerInfo = styled.div`
  margin: 0;
  padding: 0;
`;

const PlayerName = styled.p`
  margin: 0 0 0 0;
  padding: 0;
  font-size: 2rem;
`;

const Club = styled.span`
  margin: 10px 10px 0 0;
  font-weight: bold;
`;

const Position = styled.span`
  margin: 0 0 0 0;
`;

const Average = styled.div`
  margin-right: 20px;
`;

const PlayersListItem = ({ userData: { average, name, club, position } }) => (
  <Wrapper>
    <Average>{average}</Average>
    <PlayerInfo>
      <PlayerName>{name}</PlayerName>
      <Club>{club}</Club>
      <Position>{position}</Position>
    </PlayerInfo>
  </Wrapper>
);

PlayersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    club: PropTypes.string,
    position: PropTypes.string,
  }),
};

export default PlayersListItem;
