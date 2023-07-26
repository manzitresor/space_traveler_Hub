/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchrockets', async (thunkApi) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue('ooops something wrent wrong');
  }
});
const initialState = {
  data: [],
  isloading: false,
  error: false,
  reservedRockets: [],
};

const rocketReducers = (state, { payload }) => ({
  ...state,
  data: state.data.map((rocket) => (rocket.id === payload
    ? { ...rocket, reserved: !rocket.reserved }
    : rocket)),
  reservedRockets: state.reservedRockets.includes(payload)
    ? state.reservedRockets.filter((rocketId) => rocketId !== payload)
    : [...state.reservedRockets, payload],
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketHandler: rocketReducers,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isloading = false;
      const fetchdata = action.payload.map((item) => {
        const rockets = {};
        rockets.id = item.id;
        rockets.name = item.rocket_name;
        [rockets.image] = item.flickr_images;
        rockets.description = item.description;
        rockets.reserved = state.reservedRockets.includes(item.id);
        return rockets;
      });
      state.data = fetchdata;
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    });
  },
});

export const { rocketHandler } = rocketsSlice.actions;

export default rocketsSlice.reducer;
