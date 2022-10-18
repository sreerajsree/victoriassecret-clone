import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="bg-[#F5F5F6]">
          <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-4">
              <div className="mt-10 col-span-2">
                <button className="uppercase tracking-wider px-8 py-4 border bg-white border-gray-900 rounded">
                  sign up to stay in the know
                </button>
                <div className="flex mb-10 mt-5">
                  <AiFillFacebook className="w-6 h-6" />
                  <BsTwitter className="w-5 h-5 ml-5" />
                  <AiFillYoutube className="h-6 w-6 ml-5" />
                  <BsPinterest className="h-5 w-5 ml-5" />
                  <AiFillInstagram className="h-6 w-6 ml-5" />
                </div>
              </div>
              <div className="mt-10 text-xs font-thin text-gray-600">
                <p className="uppercase font-bold">help</p>
                <p className="mt-2">Customer Service</p>
                <p className="mt-2">Live Chat</p>
                <p className="mt-2">Careers</p>
              </div>
              <div className="mt-10 text-xs font-thin text-gray-600">
                <p className="uppercase font-bold">orders & returns</p>
                <p className="mt-2">Order Status</p>
                <p className="mt-2">Shipping Information</p>
                <p className="mt-2">Return Policy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8 text-[10px] text-gray-600 container mx-auto">
          <p>© 2022 Victoria&apos;s Secret. All Rights Reserved.</p>
          <div className="flex mt-3">
            <div className="pr-1">Terms of Use</div>
            <div className="border-l border-black px-1">Privacy & Security</div>
            <div className="border-l border-black px-1">
              Modern Slavery Transport Statement
            </div>
            <div className="border-l border-black px-1">Ad Peferences</div>
            <div className="border-l border-black px-1">
              SSL Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
