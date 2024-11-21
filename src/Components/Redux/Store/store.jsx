import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../Slice/apiSlice";

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export default store;
