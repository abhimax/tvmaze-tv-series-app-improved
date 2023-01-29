import { createSlice } from "@reduxjs/toolkit";

const initialShowState = {
  searchedShows: [],
  selectedShow: {},
  selectedCast: [],
};

const showSlice = createSlice({
  name: "shows",
  initialState: initialShowState,
  reducers: {
    fetchShows(state, action) {
      state.searchedShows = action.payload.searchedShows;
    },
    setSelectedShow(state, action) {
      const searchedShows = action.payload.searchedShows;
      const selectedId = action.payload.selectedId;
      state.selectedShow = searchedShows.find((item) => item.show.id.toString() === selectedId);
    },
    fetchCast(state, action) {
      state.selectedCast = action.payload.selectedCast;
    },
  },
});

export default showSlice;
export const showAction = showSlice.actions;
