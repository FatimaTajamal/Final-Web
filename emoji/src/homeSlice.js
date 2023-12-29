import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHomePageData = createAsyncThunk('home/fetchHomePageData', async () => {
  const response = await axios.get('https://emojihub.yurace.pro/api/all');
  return response.data;
});

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomePageData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHomePageData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchHomePageData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
