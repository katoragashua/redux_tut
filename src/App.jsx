import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartSlice from "./features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./components/Modal";

const {
  actions: { calculateTotal },
} = cartSlice;

function App() {
  const modalRef = useRef(null);
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  console.log(modalRef.current);

  return (
    <main className="App">
      <Modal  />
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
