import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./redux/CounterSlice";
import LikeSlice from "./redux/LikeSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    like :LikeSlice
  },
});
