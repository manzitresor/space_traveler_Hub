import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import Rocket from './Rocket';

function Rockets() {
  const { data, error, isloading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  if (isloading === true) {
    return (
      <div>
        loading....
      </div>
    );
  }
  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }
  return (
    <>
      <div className="main-rockets">
        {
          data.map((item) => (
            <Rocket key={item.id} item={item} />
          ))
        }
      </div>
    </>
  );
}

export default Rockets;
