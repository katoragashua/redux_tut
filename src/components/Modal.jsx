import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../features/cart/cartSlice";
import modalSlice from "../features/modal/modalSlice";

const {
  actions: { clearCart },
} = cartSlice;

const {
  actions: { toggleModal },
} = modalSlice;

const Modal = () => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  console.log(modalRef);
  const { isShown } = useSelector((store) => store.modal);

  const showModal = () => {
    if (isShown) modalRef.current.showModal();
    if (!isShown) modalRef.current.close();
  };
  useEffect(() => {
    showModal();
  }, [showModal]);

  return (
    <dialog className="modal-container" ref={modalRef}>
      <div className="modal">
        <h4>Do you want to remove all items from your cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn clear"
            onClick={() => {
              dispatch(toggleModal());
              dispatch(clearCart());
            }}
          >
            clear
          </button>
          <button
            type="button"
            className="btn cancel"
            onClick={() => dispatch(toggleModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
