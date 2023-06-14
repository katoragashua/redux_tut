import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = (useSelector((store) => (store)));
  
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <i className="ri-handbag-line" style={{ fontSize: "30px" }}></i>
          <div className="amount-container">
            <p className="total-amount">{cart.amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
