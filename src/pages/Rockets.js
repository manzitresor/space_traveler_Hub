import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

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
  if (data) {
    console.log(data);
  }
  return (
    <div>Rockets</div>
  );
}

export default Rockets;
