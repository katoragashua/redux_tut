import React from "react";
import { useDispatch } from "react-redux";
import cartSlice from "../features/cart/cartSlice";

const {
  actions: { removeItem, toggleAmount },
} = cartSlice;

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();
  const up = <i className="ri-arrow-up-s-fill"></i>;
  const down = <i className="ri-arrow-down-s-fill"></i>;
 
  

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          Remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(toggleAmount({ id, type: "increase" }))}
        >
          {up}
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount <= 1) {
              alert("Only positive values allowed.")
            }
            dispatch(toggleAmount({ id, type: "decrease" }));
          }}
        >
          {down}
        </button>
      </div>
    </article>
  );
};

export default CartItem;
