import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  return (
    <Carousel
      className=""
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite={false}
      keyBoardControl={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="p-1 md:p-2">
        <div className="relative group">
          <img src="slide1.webp" alt="slide1" className="w-full" />
          <div className="hidden group-hover:absolute group-hover:flex top-0 group-hover:bg-black/70 w-full h-full text-white items-center justify-center cursor-pointer">
            Discover More
          </div>
        </div>
      </div>
      <div className="p-1 md:p-2">
        <div className="relative group">
          <img src="slide2.webp" alt="slide2" className="w-full" />
          <div className="hidden group-hover:absolute group-hover:flex top-0 group-hover:bg-black/70 w-full h-full text-white items-center justify-center cursor-pointer">
            Discover More
          </div>
        </div>
      </div>
      <div className="p-1 md:p-2">
        <div className="relative group">
          <img src="slide3.webp" alt="slide3" className="w-full" />
          <div className="hidden group-hover:absolute group-hover:flex top-0 group-hover:bg-black/70 w-full h-full text-white items-center justify-center cursor-pointer">
            Discover More
          </div>
        </div>
      </div>
      <div className="p-1 md:p-2">
        <div className="relative group">
          <img src="slide4.webp" alt="slide4" className="w-full" />
          <div className="hidden group-hover:absolute group-hover:flex top-0 group-hover:bg-black/70 w-full h-full text-white items-center justify-center cursor-pointer">
            Discover More
          </div>
        </div>
      </div>
      <div className="p-1 md:p-2">
        <div className="relative group">
          <img src="slide5.webp" alt="slide5" className="w-full" />
          <div className="hidden group-hover:absolute group-hover:flex top-0 group-hover:bg-black/70 w-full h-full text-white items-center justify-center cursor-pointer">
            Discover More
          </div>
        </div>
      </div>
      <div className="p-1 md:p-2">
        <div className="relative group">
          <img src="slide6.webp" alt="slide6" className="w-full" />
          <div className="hidden group-hover:absolute group-hover:flex top-0 group-hover:bg-black/70 w-full h-full text-white items-center justify-center cursor-pointer">
            Discover More
          </div>
        </div>
      </div>
      <div className="p-1 md:p-2">
        <div className="relative group">
          <img src="slide7.webp" alt="slide7" className="w-full" />
          <div className="hidden group-hover:absolute group-hover:flex top-0 group-hover:bg-black/70 w-full h-full text-white items-center justify-center cursor-pointer">
            Discover More
          </div>
        </div>
      </div>
      <div className="p-1 md:p-2">
        <div className="relative group">
          <img src="slide8.webp" alt="slide8" className="w-full" />
          <div className="hidden group-hover:absolute group-hover:flex top-0 group-hover:bg-black/70 w-full h-full text-white items-center justify-center cursor-pointer">
            Discover More
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
