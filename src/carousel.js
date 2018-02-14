import React from "react";
import CoverFlow from "coverflow-react";
import "./carousel.css";

export default ({ images }) => (
  <CoverFlow
    imagesArr={images}
    height={800}
    background={"#eee"}
    itemRatio="566:800"
  />
);
