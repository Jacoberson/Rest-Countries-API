import React from "react";

const CountryDetails = ({ country }) => {
  const addCommasToPopulation = population => {
    //adds commas to populations > 1,000
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="w-264 h-336 mt-7 mb-4 ml-14 flex flex-col justify-center">
      <img
        src={country.flag}
        alt="german flag"
        className="w-264 h-160 mb-6 mt-0 ml-0 mr-0 center"
      />
      <div className="ml-6">
        <h2 className="text-very-dark-blue-lt text-18 font-800 leading-26 mb-4">
          {country.name}
        </h2>
        <div className="flex flex-col">
          <span className="flex flex-row mb-2">
            <p className="font-600 text-14 leading-4 mr-1">Population:</p>{" "}
            <p className="font-300 text-14 leading-4">
              {addCommasToPopulation(country.population)}
            </p>
          </span>
          <span className="flex flex-row mb-2">
            <p className="font-600 text-14 leading-4 mr-1">Region:</p>{" "}
            <p className="font-300 text-14 leading-4">{country.region}</p>
          </span>
          <span className="flex flex-row">
            <p className="font-600 text-14 leading-4 mr-1">Capital:</p>{" "}
            <p className="font-300 text-14 leading-4">{country.capital}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
