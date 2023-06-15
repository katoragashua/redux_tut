import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../data";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (thunkAPI) => {
    try {
      console.log(thunkAPI);
      const res = await axios(url);
      return await res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong.")
    }

  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

console.log(cartSlice);
export default cartSlice;
