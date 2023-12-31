import React from "react";
import { Cart } from "../../assets";
import "./navbar.css";
import { Link,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


export const Navbar = () => {
  const location =useLocation();
  const {cart} = useSelector(store => store.cart)
 
  return (
    <nav className={ `navbar ${location.pathname === "/order-summary" && "bottom-shadow"}`}>
      <Link to="/" className="nav-heading centered pointer" >
        <img
          src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
          alt="logo"
          className="logo-icon"
        />
        <div className="logo-name">E-commerce</div>
      </Link>
      <ul className="centered nav-links">
       {location.pathname === "/" && ( <Link  to="/order-summary" className="cart-wrapper pointer">
        <Cart />
        <div className="qty-badge">{cart.length}</div>
        </Link>)}
      </ul>
    </nav>
  );
};
