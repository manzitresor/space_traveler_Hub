import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

function ReservedRockets() {
  const { data } = useSelector((state) => state.rockets);
  const reservedRockets = data.filter((rocket) => rocket.reserved);
  return (
    <>
      <div>
        <h3>My Rockets</h3>
        {reservedRockets.length ? (
          <Table bordered hover>
            <tbody>
              {
        reservedRockets.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
          </tr>
        ))
}
            </tbody>
          </Table>
        ) : <p>You have not any Reserved Rocket</p>}
      </div>
    </>
  );
}

export default ReservedRockets;
