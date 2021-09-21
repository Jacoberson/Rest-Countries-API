import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Search from "../components/Search";
import Filter from "../components/Filter";
import CountryDetails from "../components/CountryDetails";

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};

export default function Home({ countries }) {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  return (
    <div>
      <Head>
        <title>Where in the World?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between">
        <Search />
        <Filter
          countries={countries}
          setFilteredCountries={setFilteredCountries}
        />
      </div>
      <div className="w-11/12 flex flex-col lg:flex-row lg:flex-wrap lg:ml-10">
        {filteredCountries.map(country => (
          <CountryDetails key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
}
