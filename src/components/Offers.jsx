import React from "react";
import {
  BsCalendar2CheckFill,
  BsFillBarChartLineFill,
  BsFillGiftFill,
  BsShieldFillCheck,
} from "react-icons/bs";

const Offers = () => {
  return (
    <div className="max-w-[900px] m-auto px-4 py-12 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="flex flex-col items-center">
        <BsFillGiftFill size={25} className="text-orange-300" />
        <p className="text-lg font-bold text-gray-700 mt-2">
          Booking Incentives
        </p>
      </div>

      <div className="flex flex-col items-center">
        <BsFillBarChartLineFill size={25} className="text-blue-500" />
        <p className="text-lg font-bold text-gray-700 mt-2">
          Competitive rates
        </p>
      </div>

      <div className="flex flex-col items-center">
        <BsCalendar2CheckFill size={25} className="text-yellow-300" />
        <p className="text-lg font-bold text-gray-700 mt-2">
          Book With Flexibility
        </p>
      </div>

      <div className="flex flex-col items-center">
        <BsShieldFillCheck size={25} className="text-green-500" />
        <p className="text-lg font-bold text-gray-700 mt-2">Trip Insurance</p>
      </div>
    </div>
  );
};

export default Offers;
