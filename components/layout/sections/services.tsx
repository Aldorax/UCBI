import React from "react";

const ServicesSection = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="h-52 flex flex-col justify-center items-center bg-[#00bcd5] rounded-t-xl"></div>
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-semibold text-[#00bcd5]">
              Trading Market
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              with limited supply and strategic market positioning and we
              improve liquidity and maximize investors' potential for efficient
              and secure trading in crypto markets
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
        {/* 2 */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="h-52 flex flex-col justify-center items-center bg-[#00bcd5] rounded-t-xl"></div>
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-semibold text-[#00bcd5]">
              Digital Strategy
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              Offering all the companies innovative the blockchain solutions
              tokenization services and strategic advice for the development of
              the digital economy system
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
        {/* 3 */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl ">
          <div className="h-52 flex flex-col justify-center items-center bg-[#00bcd5] rounded-t-xl"></div>
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-semibold text-[#00bcd5]">
              Blockchain Union
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              Joining a global network committed to integrating the blockchain
              technology for continued collaborative growth and better market
              opportunities
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      {/* End Grid */}
    </div>
  );
};

export default ServicesSection;
