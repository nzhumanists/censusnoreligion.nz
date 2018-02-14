import React from "react";
import ReactDOM from "react-dom";
import "./skeleton.css";
import "./index.css";
import "./App.css";
import Carousel from "./carousel";

const carouselContainers = document.querySelectorAll("[data-carousel]");
if (carouselContainers) {
  carouselContainers.forEach(container => {
    container.removeAttribute("data-carousel");
    const childNodes = Array.prototype.slice.call(container.childNodes);
    const imagesSrc = childNodes
      .filter(child => {
        console.log("nodeName", child.nodeName);
        return child.nodeName.toLowerCase() === "img";
      })
      .map(image => image.getAttribute("src"));
    container.style.overflow = "hidden";
    ReactDOM.render(<Carousel images={imagesSrc} />, container);
  });
}
