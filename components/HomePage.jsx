import React from "react";
import Image from "next/image";
import Slider from "./Slider";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="/banner1.jpg"
          width={1920}
          height={720}
          layout="responsive"
        />
        <div className="w-full h-full">
          <Link
            className="w-full h-[41rem] absolute top-0 left-0"
            href="/vsall"
          >
            <a></a>
          </Link>
          <Link
            className="border h-[4rem] w-[12rem] absolute top-[26rem] left-[17rem]"
            href="/bras"
          >
            <a></a>
          </Link>
          <Link
            className="border h-[4rem] w-[12rem] absolute top-[26rem] left-[32rem]"
            href="/panties"
          >
            <a></a>
          </Link>
          <Link
            className="border h-[4rem] w-[12rem] absolute top-[26rem] left-[47rem]"
            href="/lingerie"
          >
            <a></a>
          </Link>
          <Link
            className="border h-[4rem] w-[12rem] absolute top-[26rem] left-[62rem]"
            href="/sleeep"
          >
            <a></a>
          </Link>
          <Link
            className="border h-[4rem] w-[12rem] absolute top-[30rem] left-[17rem]"
            href="/sports"
          >
            <a></a>
          </Link>
          <Link
            className="border h-[4rem] w-[12rem] absolute top-[30rem] left-[32rem]"
            href="/beauty"
          >
            <a></a>
          </Link>
          <Link
            className="border h-[4rem] w-[12rem] absolute top-[30rem] left-[47rem]"
            href="/accessories"
          >
            <a></a>
          </Link>
          <Link
            className="border h-[4rem] w-[12rem] absolute top-[30rem] left-[62rem]"
            href="/swim"
          >
            <a></a>
          </Link>
        </div>
      </div>
      <div className="border-b-2 border-gray-500 mt-20 max-w-7xl mx-auto"></div>
      <Slider />
      <div className="text-center">
        <Link href="/bodybyv">
          <a>
            <p className="mt-2 text-6xl font-bold uppercase">
              body by victoria
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Our most-loved bras get a seasonal update with new, must-have
              hues. Featuring Memory Fit lining.
            </p>
            <p className="font-bold uppercase my-3 tracking-widest text-lg">
              shop
            </p>
          </a>
        </Link>
      </div>
      <div className="container mx-auto">
        <Link href="/pantiesbyv">
          <a>
            <Image
              src="/panties.jpg"
              width={1920}
              height={1080}
              layout="responsive"
            />
            <div className="text-center">
              <p className="mt-2 text-4xl font-bold uppercase">
                5 for ₹ 3,034.66 panties
              </p>
              <p className="mt-2 text-sm text-gary-600">
                Why stop att just fivr? Its the everyday indulgence at a
                pick-me-up price
              </p>
              <p className="font-bold uppercase my-3 tracking-widest text-lg">
                shop
              </p>
            </div>
          </a>
        </Link>
      </div>
      <div className="container mx-auto relative">
        <Link href="/limited">
          <a>
            <Image
              src="/free.jpg"
              width={1920}
              height={1080}
              layout="responsive"
            />
          </a>
        </Link>
        <div className="absolute top-1/2 right-[5%] text-center max-w-[450px]">
          <p className="uppercase tracking-wider font-bold text-base">
            limited time - online only
          </p>
          <p className="font-bold uppercase text-6xl my-2">free tote</p>
          <p className="font-bold tracking-wider uppercase">
            with an ₹ 8.060.82 purchase
          </p>
          <p className="text-base text-gray-600">
            While quanntities last. Exclusions apply. Code RWFREETOTE.{" "}
            <Link href="/details" className="underline">
              <a className="underline">Details</a>
            </Link>
          </p>
          <p className="uppercase tracking-wider font-bold my-2">
            shop new arrivals
          </p>
        </div>
      </div>
      <div className="mt-5 relative">
        <Link href="/#">
          <a>
            <Image
              src="/bras.jpg"
              width={1920}
              height={790}
              layout="responsive"
            />
            <div className="text-center tracking-wider absolute top-[43%] left-[40%]">
              <p className="font-bold uppercase">endless possibilities</p>
              <p className="font-bold uppercase text-5xl my-3">mix & match</p>
              <p className="font-bold uppercase">shop</p>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
