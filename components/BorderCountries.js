import React from "react";

const BorderCountries = ({ borderCode, countries }) => {
  const borderCountry = countries
    .filter(country => country.alpha3Code === borderCode)
    .map(country => country.name);

  return (
    <button className="w-24 h-auto shadow-border rounded-sm mb-4 mr-2.5">
      {borderCountry}
    </button>
  );
};

export default BorderCountries;
