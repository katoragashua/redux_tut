import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../features/cart/cartSlice";
import modalSlice from "../features/modal/modalSlice";

const {
  actions: { clearCart },
} = cartSlice;

const {
  actions: { toggleModal },
} = modalSlice;

const CartContainer = () => {
  const dispatch = useDispatch();

  const { cartItems, amount, total, isLoading } = useSelector(
    (store) => store.cart
  );
  const { isShown } = useSelector((store) => store.modal);
  console.log(isShown);

  if (!cartItems.length) {
    return (
      <section className="cart">
        <h2>Your Bag</h2>
        <h3 className="empty-cart">Your cart currently is empty.</h3>
      </section>
    );
  }
  return (
    <section className="cart">
      <h2>Your Bag</h2>
      <div className="">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>{total.toFixed(2)}</span>
          </h4>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(toggleModal())}
          >
            Clear cart
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
