import React from "react";
import "./NavbarBottom.css";

function NavbarBottom() {
  return (
    <div className="navbarBottom">
      <div className="navbarBottom__left">
        <p>+777 2345 7886</p>
      </div>

      <div className="navbarBottom__right">
        <p>My Account</p>
        <p>Wish List</p>
        <p>Shopping</p>
        <p>Cart</p>
        <p>Checkout</p>
      </div>
    </div>
  );
}

export default NavbarBottom;
