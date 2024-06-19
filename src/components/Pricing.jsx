import React from "react";

const Pricing = () => {
  return (
    <div>
      <div
        id="prices"
        className="w-full h-full flex flex-col justify-center items-center bg-violet-300 py-16"
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 pb-8">
          Pricing
        </h1>
        <div className="w-11/12 lg:w-8/12 bg-white rounded-3xl shadow-lg p-8">
          <ul className="divide-y divide-gray-200">
            <li className="flex justify-between items-center py-4 text-xl">
              <span className="text-gray-700">
                Nail Art Press Ons
                <br />
                <span className="text-gray-500 text-sm">
                  (includes charms and 3D art)
                </span>
              </span>
              <span className="text-gray-800 font-bold">$70</span>
            </li>
            <li className="flex justify-between items-center py-4 text-xl">
              <span className="text-gray-700">French Tips</span>
              <span className="text-gray-800 font-bold">$55</span>
            </li>
            <li className="flex justify-between items-center py-4 text-xl">
              <span className="text-gray-700">Solid Press Ons</span>
              <span className="text-gray-800 font-bold">$40</span>
            </li>
            <li className="flex justify-between items-center py-4 text-xl">
              <span className="text-gray-700">Sizing Kits</span>
              <span className="text-gray-800 font-bold">$10</span>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Pricing;
