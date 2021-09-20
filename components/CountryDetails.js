import React from "react";
import Image from "next/image";
import germany from "../public/images/germany.svg";

const CountryDetails = () => {
  return (
    <div className="w-264 h-336 mt-7 mb-4 ml-14">
      <div className="mb-6">
        <Image src={germany} alt="german flag" />
      </div>
      <div className="ml-6">
        <h2 className="text-very-dark-blue-lt text-18 font-800 leading-26 mb-4">
          Germany
        </h2>
        <div className="flex flex-col">
          <span className="flex flex-row">
            <p className="mr-1">Population:</p> <p>81,770,900</p>
          </span>
          <span className="flex flex-row">
            <p className="mr-1">Region:</p> <p>Europe</p>
          </span>
          <span className="flex flex-row">
            <p className="mr-1">Capital:</p> <p>Berlin</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
