import React, { useState } from "react";

const Search = ({ countries, setFilteredCountries }) => {
  const [search, setSearch] = useState("");

  const searchCountries = e => {
    setSearch(e);
    setFilteredCountries(
      countries.filter(country =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <div className="w-11/12 max-w-md ml-4 mt-10 lg:mt-12 lg:ml-20">
      <input
        value={search}
        placeholder="Search for a country..."
        onChange={({ target }) => searchCountries(target.value)}
        className="font-400 text-12 leading-5 shadow-search rounded-5 w-full bg-search-icon bg-no-repeat pl-14"
      />
    </div>
  );
};

export default Search;
