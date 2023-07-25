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
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
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
        rockets.type = item.rocket_type;
        rockets.image = item.flickr_images;
        rockets.description = item.description;
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

export default rocketsSlice.reducer;
