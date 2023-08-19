import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { json } from "react-router-dom";

const initialState = {
  nbrOfItems: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).length
    : 0,
  cartState: false,
  cartItems: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart"))
    : [],

  priceTotal: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openCart: (state, action) => {
      state.cartState = true;
    },
    closeCart: (state, action) => {
      state.cartState = false;
    },
    addItemToCart: (state, action) => {
      const indexOfEle = state.cartItems.findIndex(
        (ite) => ite.id == action.payload.id
      );
      if (indexOfEle >= 0) {
        state.cartItems[indexOfEle].nbrOfPro += 1;
      } else {
        const payLoadd = { ...action.payload, nbrOfPro: 1 };
        state.cartItems.push(payLoadd);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      state.nbrOfItems = state.cartItems.length;
      toast.success(`${action.payload.title} added to card`);
    },
    clearCart: (state, action) => {
      toast.success(
        ` ${
          state.cartItems.length == 0
            ? "card is already empty"
            : "card has been cleared"
        }`
      );
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      state.nbrOfItems = 0;
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.nbrOfItems = state.cartItems.length;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} has been removed`);
    },

    increase: (state, action) => {
      const selectedCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (selectedCartItem && selectedCartItem.nbrOfPro > 0) {
        selectedCartItem.nbrOfPro += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));

        toast.success(` Quantity has been  increased`);
      }
    },
    decrease: (state, action) => {
      const selectedCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (selectedCartItem && selectedCartItem.nbrOfPro > 1) {
        selectedCartItem.nbrOfPro -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));

        toast.success(` Quantity has been  decreased`);
      }
    },
    totalPrice: (state, action) => {
      let price = 0;
      state.cartItems.forEach((i) => {
        price += i.price * i.nbrOfPro;
      });
      state.priceTotal = price;
    },
   
  },
});

// localStorage.clear();
export const {
  openCart,
  closeCart,
  addItemToCart,
  clearCart,
  removeItem,
  decrease,
  increase,
  totalPrice,
} = counterSlice.actions;

export default counterSlice.reducer;
