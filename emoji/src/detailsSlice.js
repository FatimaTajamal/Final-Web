import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDetailsPageData = createAsyncThunk(
  'details/fetchDetailsPageData',
  async ({ emojiId, apiUrl }) => {
    const response = await axios.get(`${apiUrl}/${emojiId}`);
    return response.data;
  }
);

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailsPageData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDetailsPageData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDetailsPageData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default detailsSlice.reducer;
