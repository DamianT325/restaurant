import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import "./Header.css";
const Header = () => (
  <div className="app__header app__wraper section__padding" id="home">
    <div className="app__header-desc">
      <h3 className="p__opensans">Chase The New Flavour</h3>
      <div className="app__header-desc-spoon__img">as</div>

      <p className="app__header-desc-para p__opensans">
        Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat
        Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet
        Tellus
      </p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__header-image">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
