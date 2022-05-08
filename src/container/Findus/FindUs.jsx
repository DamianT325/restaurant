import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
const FindUs = () => (
  <div className="app__wrapper app__bg section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title={"Contact"} />
      <h1 className="headtext__cormorant">Find Us</h1>
      <p className="p__opensans ">
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
      </p>
      <h3 className="headtext__cormorant" style={{ fontSize: "25px" }}>
        Opening Hours
      </h3>
      <p className="p__opensans ">Mon - Fri: 10:00 am - 02:00 am</p>
      <p className="p__opensans " style={{ marginBottom: "2rem" }}>
        Sat - Sun: 10:00 am - 03:00 am
      </p>
      <button type="button" className="custom__button">
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" className="app__wrapper_img img" />
    </div>
  </div>
);

export default FindUs;
