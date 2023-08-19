import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  isOpen: false,
  likeItem: JSON.parse(localStorage.getItem("Like"))
    ? JSON.parse(localStorage.getItem("Like"))
    : [],
};

export const likeReducer = createSlice({
  name: "like",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    addLike: (state, action) => {
      const indexLike = state.likeItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexLike < 0) {
        state.likeItem.push(action.payload);
        toast.success("item has been added to wishes list");
      } else {
        toast.success("item has been already liked");
      }
      localStorage.setItem("Like", JSON.stringify(state.likeItem));
    },
    clearLike: (state, action) => {
        state.likeItem = []
      localStorage.setItem("Like", JSON.stringify([]));
    },
    removeLike: (state, action) => {
      state.likeItem = state.likeItem.filter(
        (item) => item.id !== action.payload.likeItem.id
      );
      //   state.nbrOfItems = state.likeItem.length;
      console.log(action.payload)
       localStorage.setItem("Like", JSON.stringify(state.likeItem));
      !action.payload.isCart &&
        toast.success(` item has been removed from wishes list`);
    },
  },
});

export const { open, close, addLike, removeLike, clearLike } =
  likeReducer.actions;

export default likeReducer.reducer;
