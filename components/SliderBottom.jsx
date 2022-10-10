import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};
const items = [
  <div className="item" data-value="1">
    <img src="/slide1.webp" alt="slide1" />
  </div>,
  <div className="item" data-value="2">
    <img src="/slide1.webp" alt="slide1" />
  </div>,
  <div className="item" data-value="3">
    <img src="/slide1.webp" alt="slide1" />
  </div>,
  <div className="item" data-value="4">
    <img src="/slide1.webp" alt="slide1" />
  </div>,
  <div className="item" data-value="5">
    <img src="/slide1.webp" alt="slide1" />
  </div>,
  <div className="item" data-value="5">
    <img src="/slide1.webp" alt="slide1" />
  </div>,
];

const SliderBottom = () => {
  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </>
  );
};

export default SliderBottom;
