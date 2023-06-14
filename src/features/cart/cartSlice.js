import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../data";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      //or ({...state, cartItems: []})
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      console.log(action);
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    toggleAmount: (state, { payload }) => {
      state.cartItems.find((item) => {
        if (item.id === payload.id) {
          if (payload.type === "increase") item.amount += 1;
          if (payload.type === "decrease")
            item.amount <= 1 ? (item.amount = 1) : (item.amount -= 1);
        }
      });
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      for (let item of state.cartItems) {
        amount += item.amount;
        total += item.amount * item.price;
      }
      state.amount = amount;
      state.total = total;
    },
  },
});
console.log(cartSlice);
export default cartSlice;
