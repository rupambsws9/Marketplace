import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cartlogo from "./Assets/cartlogo.png";
import profilelogo from "./Assets/profilephoto.png";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/cart">
        <div className="cart-btn">
          <img src="cartlogo" alt="cart"></img>
          <span className="cart-icon">0</span>
        </div>
      </Link>
      <Link to="userprofile">
        <img src="profilelogo" alt="profile" className="profile-icon"></img>
      </Link>
    </nav>
  );
};

export default Navbar;
