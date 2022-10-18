import React from "react";

const HomePage = () => {
  return (
    <div>
      <a href="">
        <img
          className="w-full h-full hidden md:block"
          src="/banner1.jpg"
          alt="banner1"
        />
        <img
          className="w-full h-full block md:hidden"
          src="/banner1m.jpg"
          alt="banner1mobile"
        />
        <div className="text-center">
          <h2 className="font-bold uppercase text-2xl md:text-5xl mt-5">it&apos;s shine strap season</h2>
          <p className="mt-2 text-xs text-gray-600">Give your collection a glamorous update with our signature style</p>
          <p className="mt-3 uppercase tracking-widest font-bold text-lg">Shop</p>
        </div>
      </a>
      <div className="container mx-auto mt-16">
        <a href="" className="text-center">
          <img
            className="w-full h-full hidden md:block"
            src="/banner2.jpg"
            alt="banner2"
          />
          <img
            className="w-full h-full block md:hidden"
            src="/banner2m.jpg"
            alt="banner2m"
          />
          <p className="font-bold tracking-widest uppercase text-base md:text-lg my-3">
            limited time - online only
          </p>
          <h2 className="font-bold text-3xl md:text-5xl uppercase">
            ₹ 958.01 off bras
          </h2>
          <p className="text-xs text-gray-800 my-3">
            Orig. up to ₹ 7,659.26. Excludes PINK, third-party styles, and
            clearance. Prices as marked.
          </p>
          <p className="font-bold tracking-widest uppercase text-lg">shop</p>
        </a>
      </div>
      <div>
        <a href="" className="text-center">
          <img
            className="w-full h-full mt-10 hidden md:block"
            src="/banner3.jpg"
            alt="banner3"
          />
          <img
            className="w-full h-full mt-5 block md:hidden"
            src="/banner3m.jpg"
            alt="banner3m"
          />
          <h2 className="font-bold uppercase text-2xl md:text-4xl mt-5">
            more pajamas, please
          </h2>
          <p className="text-gray-800 text-xs mt-3">
            Elevate your nighttime look with chic, modal styles.
          </p>
          <p className="mt-4 font-bold tracking-widest uppercase text-lg">
            shop
          </p>
        </a>
      </div>
      <div className="relative hidden md:block">
        <a href="">
          <img className="w-full h-full mt-14" src="/beauty.jpg" alt="beauty" />
        </a>
        <div className="absolute top-[30%] left-[5%]">
          <div className="text-white text-center max-w-[450px]">
            <p className="italic uppercase">limited time</p>
            <h2 className="font-bold text-5xl">₹ 857.42</h2>
            <p className="font-bold text-2xl my-2 tracking-wide">Lotions</p>
            <p className="font-thin text-sm">
              Orig. up to ₹ 1,911.22 each. Select styles. Excludes PINK and
              Natural Beauty Body Care. Limit 9 per customer. Prices as marked.
              In-store prices may vary.
            </p>
            <p className="font-bold uppercase tracking-widest my-5">
              shop the collection
            </p>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <a href="">
          <img
            className="w-full h-full mt-8"
            src="/beautym.jpg"
            alt="beautym"
          />
          <div className="text-center max-w-[340px] mx-auto">
            <p className="italic uppercase my-2">limited time</p>
            <h2 className="font-bold text-5xl">₹ 857.42</h2>
            <p className="font-bold text-2xl my-2 tracking-wide">Lotions</p>
            <p className="font-thin text-xs">
              Orig. up to ₹ 1,911.22 each. Select styles. Excludes PINK and
              Natural Beauty Body Care. Limit 9 per customer. Prices as marked.
              In-store prices may vary.
            </p>
            <p className="font-bold uppercase tracking-widest my-5">
              shop the collection
            </p>
            <div className="border-b-2 mt-16 mb-5 border-gray-400"></div>
          </div>
        </a>
      </div>
      <div className="mt-10 md:mt-16">
        <a href="">
          <img
            className="w-full h-full hidden md:block"
            src="/banner4.jpg"
            alt="banner4"
          />
          <img
            className="w-full h-full block md:hidden"
            src="/banner4m.jpg"
            alt="banner4"
          />
        </a>
      </div>
      <div className="mt-10 md:mt-16">
        <a href="">
          <img
            className="w-full h-full hidden md:block"
            src="/banner5.jpg"
            alt="banner5"
          />
          <img
            className="w-full h-full block md:hidden"
            src="/banner5m.jpg"
            alt="banner5"
          />
        </a>
      </div>
      <hr class="my-10 md:my-16 h-[1.5px] md:h-[2.5px] bg-gray-400 border-0 max-w-[300px] md:container mx-auto"></hr>
      <div>
        <div className="hidden md:block">
          <img className="w-full h-full" src="/faq.jpg" alt="faq" />
        </div>
        <div className="block md:hidden">
          <img className="w-full h-full" src="/faqm.jpg" alt="faqm" />
        </div>
      </div>
      <div className="bg-black mt-10">
        <a href="">
          <div className="text-center text-white py-16 md:py-20">
            <h2 className="font-bold uppercase text-3xl md:text-4xl">don&apos;t miss out!</h2>
            <p className="my-2 font-normal md:font-semibold px-4 text-xs md:text-base">
              Get exclusive offers, the latest trends & our new arrivals
              delivered straight to your inbox!
            </p>
            <p className="font-bold tracking-widest uppercase text-lg">
              sign up for email
            </p>
          </div>
        </a>
      </div>
      <div className="text-center my-10 md:my-12">
        <a href="">
          <h2 className="text-gray-600 font-thin uppercase text-xl tracking-wider hidden md:block">
            follow our story @victoriassecret
          </h2>
          <h2 className="text-gray-600 font-thin uppercase text-xl tracking-wider block md:hidden">
            made to be seen @victoriassecret
          </h2>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
