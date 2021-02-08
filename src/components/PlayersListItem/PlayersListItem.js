import React from 'react';
import PropTypes from 'prop-types';

const PlayersListItem = ({ userData: { average, name, club, position } }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>IMG</p>
      <p>{name}</p>
      <p>{club}</p>
      <p>{position}</p>
    </div>
  </li>
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
