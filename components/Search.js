import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-11/12 max-w-md ml-4 mt-10 lg:mt-12 lg:ml-20">
      <input
        value={search}
        placeholder="Search for a country..."
        onChange={({ target }) => setSearch(target.value)}
        className="font-400 text-12 leading-5 shadow-search rounded-5 w-full bg-search-icon bg-no-repeat pl-14"
      />
    </div>
  );
};

export default Search;
