import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchMissions, joinMission, leaveMission } from '../redux/missions/missionsSlice';

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

  const {
    missions: missionsData,
    status: missionsStatus,
    error: missionsError,
  } = useSelector((store) => store.missions);

  useEffect(() => {
    if (missionsData.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missionsData]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

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
              <td className="statusColumn">
                <div style={item.joined ? { backgroundColor: 'green' } : { backgroundColor: 'grey' }} className="status">
                  {item.joined ? 'Active Member' : 'Not A Member'}
                </div>
              </td>
              <td className="buttonColumn">
                {item.joined ? (
                  <button
                    type="button"
                    className="missionButton"
                    style={{ border: '1px solid red', color: 'red' }}
                    onClick={() => handleLeaveMission(item.mission_id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="missionButton"
                    onClick={() => handleJoinMission(item.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledMission>
  );
}

export default Missions;
