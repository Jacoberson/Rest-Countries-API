import React from "react";

const Filter = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceanea"];

  return (
    <select
      name="regions"
      className="w-48 h-auto mt-12 ml-4 lg:mr-20 shadow-search rounded-5">
      <option value="" selected>
        Filter by Region
      </option>
      {regions.map(region => (
        <option value={region}>{region}</option>
      ))}
    </select>
  );
};

export default Filter;
