import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchMissions } from '../redux/missions/missionsSlice';

const StyledMission = styled.div`
  width: 80vw;
  margin: 20px auto;
  table {
    border-collapse: collapse;
    th,
    td {
      border: 1px solid lightgray;
      padding: 5px;
    }
    .missionButton {
      background-color: white;
      border: 1px solid gray;
      color: gray;
    }
    .status {
      background-color: gray;
      text-align: center;
      color: white;
      border-radius: 5px;
    }
    .rows:nth-child(odd) {
      background-color: #f2f2f2;
    }
  }
`;

function Missions() {
  const dispatch = useDispatch();

  const missionsData = useSelector((state) => state.missions.rockets);
  const missionsStatus = useSelector((state) => state.missions.status);
  const missionsError = useSelector((state) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (missionsStatus === 'loading') {
    return (
      <h1 style={{ marginLeft: '40px' }}>Loading...</h1>
    );
  }

  if (missionsError !== null) {
    return (
      <h1 style={{ marginLeft: '40px' }}>{missionsError}</h1>
    );
  }
  return (
    <StyledMission>
      <table>
        <colgroup width="10%" />
        <colgroup width="70%" />
        <colgroup width="10%" />
        <colgroup width="10%" />
        <thead>
          <tr>
            <th>Mission</th>
            <th>Discription</th>
            <th>status</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {missionsData.map((item) => (
            <tr className="rows" key={item.mission_id}>
              <td className="name">{item.mission_name}</td>
              <td className="description">{item.description}</td>
              <td className="statusColumn"><div className="status">Not A Member</div></td>
              <td className="buttonColumn"><button type="button" className="missionButton">Join Mission</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledMission>
  );
}

export default Missions;
