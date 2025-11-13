// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (items) => {
  localStorage.setItem("cartItems2", JSON.stringify(items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.items.find((x) => x.id === item.id);
      if (exist) {
        exist.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
      saveToLocalStorage(state.items);
    },

    removeFromCart: (state, action) => {
      const item = state.items.find((x) => x.id === action.payload.id);
      if (!item) return;

      if (item.qty > 1) {
        item.qty -= 1;
      } else {
        state.items = state.items.filter((x) => x.id !== action.payload.id);
      }
      saveToLocalStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveToLocalStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
