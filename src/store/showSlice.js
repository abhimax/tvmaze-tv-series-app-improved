import { createSlice } from "@reduxjs/toolkit";

const initialShowState = {
  searchedShows: [],
  selectedShow: {}
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
      const selectedId = action.payload.id;
      console.log('searchedShows >>>',searchedShows);
      searchedShows.forEach(element => {
        console.log('element.show.id', typeof element.show.id)
        console.log('element.show.id', typeof selectedId)
        // if(element.show.id.trim()===selectedId.trim()){
        //   console.log('Matched!',element.show.id);
        // }
      });
      state.selectedShow = searchedShows.find((item) => item.id === selectedId);
      
    },
  },
});

export default showSlice;
export const showAction = showSlice.actions;
