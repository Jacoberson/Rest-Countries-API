import Head from "next/head";
import Header from "../components/Header";
import Search from "../components/Search";
import Filter from "../components/Filter";
import CountryDetails from "../components/CountryDetails";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Where in the World?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
        <Search />
        <Filter />
      </div>
      <CountryDetails />
    </div>
  );
}
