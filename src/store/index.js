import showSlice from "./showSlice";
const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: { shows: showSlice.reducer }
});

export default store;