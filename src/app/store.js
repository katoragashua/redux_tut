import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import modalSlice from "../features/modal/modalSlice";

const { actions: cartActions, reducer: cartReducer } = cartSlice;
const { actions: modalActions, reducer: modalReducer } = modalSlice;

console.log(cartActions, modalActions);

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
