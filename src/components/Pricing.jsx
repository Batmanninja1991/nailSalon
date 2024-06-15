import React from "react";

const Pricing = () => {
  return (
    <div>
      <div
        id="prices"
        className="flex flex-col justify-center items-center py-16"
      >
        <h1 className="text-[32px] md:text-[34px] roboto-slab-thin pb-8 font-semibold">
          Pricing
        </h1>
        <div className="w-11/12 lg:w-9/12 h-full bg-white rounded-3xl  shadow-gray-600 shadow-xl px-4 py-8">
          <ul className="grid grid-cols-2 py-1">
            <li className="text-xl pt-4 pb-4 pl-4 text-left">
              Nail Art Press Ons
              <span className="text-sm"> ( includes charms and 3D art )</span>
              <div className="w-full border-b-2 border-black border-dotted"></div>
            </li>
            <li className="text-xl pt-4 pb-4 pr-4 pl-[1px] text-right">
              $70
              <div className="w-full border-b-2 border-black border-dotted"></div>
            </li>
          </ul>
          <ul className="grid grid-cols-2 py-1">
            <li className="text-xl pt-4 pb-4 pl-4 text-left">
              French Tips
              <div className="w-full border-b-2 border-black border-dotted"></div>
            </li>
            <li className="text-xl pt-4 pb-4 pr-4 pl-[1px] text-right">
              $55
              <div className="w-full border-b-2 border-black border-dotted"></div>
            </li>
          </ul>
          <ul className="grid grid-cols-2 py-1">
            <li className="text-xl pt-4 pb-4 pl-4 text-left">
              Solid Press Ons
              <div className="w-full border-b-2 border-black border-dotted"></div>
            </li>
            <li className="text-xl pt-4 pb-4 pr-4 pl-[1px] text-right">
              $40
              <div className="w-full border-b-2 border-black border-dotted"></div>
            </li>
          </ul>
          <ul className="grid grid-cols-2 py-1">
            <li className="text-xl pt-4 pb-4 pl-4 text-left">
              Sizing Kits
              <div className="w-full border-b-2 border-black border-dotted"></div>
            </li>
            <li className="text-xl pt-4 pb-4 pr-4 pl-[1px] text-right">
              $10
              <div className="w-full border-b-2 border-black border-dotted"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
