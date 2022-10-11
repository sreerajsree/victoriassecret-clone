import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = () => {
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
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <nav class="relative bg-white border-b-2 border-gray-300 text-gray-900">
        <div class="container mx-auto flex justify-between">
          <ul class="flex">
            <li class="hoverable hover:bg-teal-700 hover:text-white">
              <a
                href="#"
                class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-teal-700 hover:text-white"
              >
                Hover to show
              </a>
              <div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-teal-700 z-50">
                <div class="container mx-auto w-full flex flex-wrap justify-between">
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                  </ul>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                  </ul>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                  <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                  </ul>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                  <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Carousel
        className="container mx-auto my-20"
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
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="apple"
            className="w-full"
          />
        </div>
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="apple"
            className="w-full"
          />
        </div>
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="apple"
            className="w-full"
          />
        </div>
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="apple"
            className="w-full"
          />
        </div>
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="apple"
            className="w-full"
          />
        </div>
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="apple"
            className="w-full"
          />
        </div>
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="apple"
            className="w-full"
          />
        </div>
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="apple"
            className="w-full"
          />
        </div>
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="apple"
            className="w-full"
          />
        </div>
      </Carousel>
    </>
  );
};

export default data;
