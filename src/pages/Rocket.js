/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { booking, cancelBooking } from '../redux/rockets/rocketsSlice';

function Rocket({ item }) {
  const dispatch = useDispatch();
  const { reserved } = useSelector((state) => state.rockets.data.find((rocket) => rocket.id === item.id));
  const handleReserve = (id) => {
    dispatch(booking(id));
  };

  const handleCancelReserve = (id) => {
    dispatch(cancelBooking(id));
  };
  return (
    <>
      <div className="rocket-container">
        <div className="one-rocket">
          <img src={item.image} alt="rocket" />
          <div className="rocket-card-content">
            <h1>{item.name}</h1>
            { reserved ? (
              <span>
                {' '}
                <Badge bg="secondary">reserved</Badge>
              </span>
            ) : null }
            <p>{item.description}</p>
            {
                !reserved ? (<Button type="submit" onClick={() => handleReserve(item.id)}>Reserve Rocket</Button>)
                  : (
                    <Button type="submit" onClick={() => handleCancelReserve(item.id)}> Cancel Reservation</Button>
                  )

            }

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
    id: PropTypes.number.isRequired,
  }).isRequired,
};
