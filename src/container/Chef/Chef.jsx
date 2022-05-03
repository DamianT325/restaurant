import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__chef app__bg app__wraper section__padding">
    <div className="app__chef_image">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__chef_heading">
      <SubHeading title={"Chef’s Word"} />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <p className="p__opensans">
        auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
        Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
        lectus eu. Congue iaculis integer curabitur semper sit nunc.
      </p>
    </div>
  </div>
);

export default Chef;
