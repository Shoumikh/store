import React from "react";
import logo from "./logo.png";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import "./NavbarTop.css";

function NavbarTop() {
  return (
    <div className="navbarTop">
      <div className="navbarTop__left">
        <img src={logo} alt="" />
      </div>
      <div className="navbarTop__middle">
        <p>Home</p>
        <p>Category</p>
        <p>Latest</p>
        <p>Blog</p>
        <p>Page</p>
        <p>Contact</p>
      </div>
      <div className="navbarTop__right">
        <div className="navbarTop__rightSearch">
          <input type="text" name="Search" placeholder="Search products" />
          <SearchIcon className="navbarTop__rightSearchInput" />
        </div>

        <FavoriteBorderOutlinedIcon className="navbarTop__rightHeart" />
        <ShoppingCartOutlinedIcon className="navbarTop__rightCart" />
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default NavbarTop;
