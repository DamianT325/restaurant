import React from "react";
import { images } from "../../constants";
const SubHeading = ({ title }) => (
  <div
    style={{
      marginBottom: "1rem",
      flexDirection: "column",
      display: "flex",
      alignItems: "flex-start",
    }}
    className="p__cormorant "
  >
    {title}

    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
