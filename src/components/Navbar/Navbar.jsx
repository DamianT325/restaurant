import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => (
  <div className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="logo" className="app__navbar-logo-img" />
    </div>
    <ul className="app__navbar-links">
      <li className="app__navbar-links-link" id="home">
        Home
      </li>
      <li className="app__navbar-links-link" id="Pages">
        Pages
      </li>
      <li className="app__navbar-links-link" id="Contact Us">
        Contact Us
      </li>
      <li className="app__navbar-links-link" id="Blog">
        Blog
      </li>
      <li className="app__navbar-links-link" id="Landing">
        Landing
      </li>
    </ul>
    <div className="app__navbar-logInLogOut">
      <p className="app__navbar-logInLogOut-paragraph">Log In / Registration</p>
      <div></div>
      <p className="app__navbar-logInLogOut-paragraph"> Book Table</p>
    </div>
  </div>
);

export default Navbar;
