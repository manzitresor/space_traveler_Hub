/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { rocketHandler } from '../redux/rockets/rocketsSlice';

function Rocket({ item }) {
  const dispatch = useDispatch();
  const { reserved } = useSelector((state) => state.rockets.data.find((rocket) => rocket.id === item.id));
  const handleReserve = (id) => {
    dispatch(rocketHandler(id));
  };

  const handleCancelReserve = (id) => {
    dispatch(rocketHandler(id));
  };
  return (
    <>
      <div className="rocket-container">
        <div className="one-rocket">
          <img src={item.image} alt="rocket" />
          <div className="rocket-card-content">
            {
                !reserved ? (
                  <>
                    {' '}
                    <div className="reserved">
                      <h1>{item.name}</h1>
                      <p>{item.description}</p>
                    </div>
                    <Button type="submit" onClick={() => handleReserve(item.id)}>Reserve Rocket</Button>
                  </>
                )
                  : (
                    <>
                      <div className="reserved">
                        <h1>{item.name}</h1>
                        <p>
                          <button className="reserved-badge" type="submit">reserved</button>
                          {item.description}
                        </p>
                      </div>
                      <Button type="submit" onClick={() => handleCancelReserve(item.id)} variant="outline-secondary"> Cancel Reservation</Button>
                    </>
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
