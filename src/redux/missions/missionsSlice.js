import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {

  rockets: [],

  status: 'idle',

  error: null,

};

const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(

  'missions/fetchMissions',

  async () => {
    const response = await axios.get(URL);

    return response.data;
  },

);

export const missionsSlice = createSlice({

  name: 'missions',

  initialState,

  reducers: {

  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.rockets = action.payload;
      })

      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';

        state.error = action.error.message;
      });
  },

});

export default missionsSlice.reducer;
