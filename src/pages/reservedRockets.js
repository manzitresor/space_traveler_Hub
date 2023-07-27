import React from 'react';
import { useSelector } from 'react-redux';

function ReservedRockets() {
  const { data } = useSelector((state) => state.rockets);
  const reservedRockets = data.filter((rocket) => rocket.reserved);

  const ulStyles = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  };

  const listStyles = {
    border: '1px solid lightgrey',
    padding: '15px 25vw 15px 20px',
  };
  return (
    <>
      <div className="rockets">
        <h2 className="rockets-h1">My Rockets</h2>
        {
        reservedRockets.map((item) => (
          <ul style={ulStyles} className="rockets-ul" key={item.id}>
            <li style={listStyles}>{item.name}</li>
          </ul>
        ))
}

      </div>
    </>
  );
}

export default ReservedRockets;
