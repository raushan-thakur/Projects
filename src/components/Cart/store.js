import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const persistedCart = localStorage.getItem("cartItems2")
  ? JSON.parse(localStorage.getItem("cartItems2"))
  : [];

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: { items: persistedCart },
  },
});
