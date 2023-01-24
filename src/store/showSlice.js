import { createSlice } from "@reduxjs/toolkit";

const initialShowState = {
  searchedShows: [],
};

const showSlice = createSlice({
  name: "shows",
  initialState: initialShowState,
  reducers: {
    fetchShows(state, action) {
      state.searchedShows = action.payload.searchedShows;
    },
  },
});

export default showSlice;
export const showAction = showSlice.actions;
