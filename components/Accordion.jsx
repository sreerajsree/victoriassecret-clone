import { useState } from "react";

const Accordion = () => {
  const [accordion, setAccordion] = useState(0);
  return (
    <>
      <button
        onClick={() => (accordion === 1 ? setAccordion(0) : setAccordion(1))}
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500"
      >
        <span>What is Flowbite?</span>
        <svg
          className={`w-6 h-6 shrink-0 ${
            accordion === 1 ? "rotate-180" : "rotate-360"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      {accordion === 1 ? (
        <div>
          <div className="p-5 font-light border border-b-0 border-gray-200">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Data 1
            </p>
            <p className="text-gray-500">
              Data Accordion
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Accordion;
