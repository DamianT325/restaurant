import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [togleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="app__navbar">
        <div className="app__navbar-logo">
          <img
            src={images.gericht}
            alt="logo"
            className="app__navbar-logo-img"
          />
        </div>
        <ul className="app__navbar-links">
          <li className="app__navbar-links-link" id="home">
            Home
          </li>
          <li className="app__navbar-links-link" id="pages">
            Pages
          </li>
          <li className="app__navbar-links-link" id="contact Us">
            Contact Us
          </li>
          <li className="app__navbar-links-link" id="blog">
            Blog
          </li>
          <li className="app__navbar-links-link" id="landing">
            Landing
          </li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">
            Log In / Register
          </a>
          <div></div>
          <a href="/" className="p__opensans">
            Book Table
          </a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />

          {togleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
              <ul className="app__navbar-smallscreen-links">
                <li className="app__navbar-smallscreen-link" id="home">
                  Home
                </li>
                <li className="app__navbar-smallscreen-link" id="pages">
                  About
                </li>
                <li className="app__navbar-smallscreen-link" id="contact Us">
                  Menu
                </li>
                <li className="app__navbar-smallscreen-link" id="blog">
                  Awards
                </li>
                <li className="app__navbar-smallscreen-link" id="landing">
                  Contact
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
