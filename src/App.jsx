import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartSlice from "./features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./components/Modal";
import { getCartItems } from "./features/cart/cartSlice";

const {
  actions: { calculateTotal}
} = cartSlice;
console.log(cartSlice);

function App() {
  const modalRef = useRef(null);
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  },[]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  console.log(modalRef.current);

  return (
    <main className="App">
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
