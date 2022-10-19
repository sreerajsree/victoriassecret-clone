import { useState } from "react";
import Image from "next/image";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = () => {
  const [accordion, setAccordion] = useState(0);
  return (
    <>
      <button
        onClick={() => (accordion === 1 ? setAccordion(0) : setAccordion(1))}
        type="button"
        className="flex items-center justify-between w-full p-5 text-left text-gray-500 font-semibold uppercase text-sm border-b border-gray-300"
      >
        <span>
          <div className="flex divide-x divide-gray-300">
            <button className="px-2">
              <Image
                className="rounded-full"
                src="/india.png"
                width={16}
                height={16}
                alt="india"
              />
            </button>
            <button className="uppercase px-2">english</button>
            <button className="uppercase px-2">inr</button>
          </div>
        </span>
        {accordion === 1 ? (
          <AiOutlineMinus className="w-5 h-5" />
        ) : (
          <AiOutlinePlus className="w-5 h-5" />
        )}
      </button>
      {accordion === 1 ? (
        <div>
          <div className="p-5 font-light border border-b-0 border-gray-200">
            <p className="text-xs text-gray-600">
              Your order will be charged and processed in Indian Rupee (INR)
            </p>
            <select
              id="countries"
              class="bg-[#F5F5F6] text-gray-600 text-sm block w-full p-2.5 outline-none mt-2"
            >
              <option selected>India</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select
              id="countries"
              class="bg-[#F5F5F6] text-gray-600 text-sm block w-full p-2.5 outline-none mt-3"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <button className="border border-black rounded w-full py-3 px-8 uppercase mt-4">save</button>
          </div>
        </div>
      ) : (
        ""
      )}
      <button
        onClick={() => (accordion === 2 ? setAccordion(0) : setAccordion(2))}
        type="button"
        className="flex items-center justify-between w-full p-5 text-left text-gray-500 font-bold uppercase text-sm"
      >
        <span>help</span>
        {accordion === 2 ? (
          <AiOutlineMinus className="w-5 h-5" />
        ) : (
          <AiOutlinePlus className="w-5 h-5" />
        )}
      </button>
      {accordion === 2 ? (
        <div>
          <div className="p-5 font-light border border-b-0 border-gray-200 text-gray-600 text-sm">
            <ul>
              <li className="mb-3">Customer Service</li>
              <li className="mb-3">Live Chat</li>
              <li className="mb-3">Careers</li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      <button
        onClick={() => (accordion === 3 ? setAccordion(0) : setAccordion(3))}
        type="button"
        className="flex items-center justify-between w-full p-5 text-left text-gray-500 font-bold uppercase text-sm"
      >
        <span>orders & returns</span>
        {accordion === 3 ? (
          <AiOutlineMinus className="w-5 h-5" />
        ) : (
          <AiOutlinePlus className="w-5 h-5" />
        )}
      </button>
      {accordion === 3 ? (
        <div>
          <div className="p-5 font-light border border-b-0 border-gray-200 text-gray-600 text-sm">
            <ul>
              <li className="mb-3">Order Status</li>
              <li className="mb-3">Shipping Information</li>
              <li className="mb-3">Return Policy</li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="p-2">
      <div className="my-8 text-[10px] text-gray-500 container mx-auto">
          <p className="border-b border-gray-300 pb-5">© 2022 Victoria&apos;s Secret. All Rights Reserved.</p>
          <div className="flex pt-5">
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

export default Accordion;
