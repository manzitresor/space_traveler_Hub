/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function Rocket({ item }) {
  return (
    <>
      <div className="rocket-container">
        <div className="one-rocket">
          <img src={item.image} alt="rocket" />
          <div className="rocket-card-content">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <Button type="submit">Reserve Rocket</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rocket;

Rocket.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
