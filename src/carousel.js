import React from "react";
import CoverFlow from "./coverflow-react";
import "./carousel.css";

export default ({ images }) => (
  <CoverFlow
    imagesArr={images}
    height={600}
    background={"#eee"}
    itemRatio="566:800"
  />
);
