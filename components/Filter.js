import React from "react";

const Filter = ({ countries, setFilteredCountries }) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const filterCountries = region => {
    if (region === "All") {
      return setFilteredCountries(countries);
    }
    return setFilteredCountries(
      countries.filter(country => country.region === region)
    );
  };
  return (
    <select
      name="regions"
      className="w-48 h-12 mt-12 ml-4 lg:mr-20 shadow-search rounded-5 self-start dark:bg-dark-blue-dk"
      onChange={({ target }) => filterCountries(target.value)}>
      <option disabled defaultValue>
        Filter by Region
      </option>
      {regions.map(region => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default Filter;
