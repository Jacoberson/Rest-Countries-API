import React from "react";
import Link from "next/link";

const CountryDetails = ({ country }) => {
  const flag = country.flags[0];

  const addCommasToPopulation = population => {
    //adds commas to populations > 1,000
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Link href={`/country/${country.alpha3Code}`}>
      <div className="w-264 h-336 mt-7 mb-4 ml-14 flex flex-col justify-center">
        <img
          src={flag}
          alt={`${country} flag`}
          className="w-264 h-160 mb-6 mt-0 ml-0 mr-0 center"
        />
        <div className="ml-6">
          <h2 className="text-very-dark-blue-lt text-18 font-800 leading-26 mb-4">
            {country.name}
          </h2>
          <div className="flex flex-col">
            <span className="flex flex-row mb-2">
              <h3 className="font-600 text-14 leading-4 mr-1">Population:</h3>{" "}
              <p className="font-300 text-14 leading-4">
                {addCommasToPopulation(country.population)}
              </p>
            </span>
            <span className="flex flex-row mb-2">
              <h3 className="font-600 text-14 leading-4 mr-1">Region:</h3>{" "}
              <p className="font-300 text-14 leading-4">{country.region}</p>
            </span>
            <span className="flex flex-row">
              <h3 className="font-600 text-14 leading-4 mr-1">Capital:</h3>{" "}
              <p className="font-300 text-14 leading-4">{country.capital}</p>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryDetails;
