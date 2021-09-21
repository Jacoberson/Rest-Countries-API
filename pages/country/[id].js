import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  const paths = countries.map(country => ({
    params: { id: country.alpha3Code },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.id}`
  );
  const country = await res.json();

  return {
    props: {
      country,
    },
  };
};

const Country = ({ country }) => {
  return (
    <>
      <Link href="/">
        <button>back</button>
      </Link>
      <h1>{country.name}</h1>
    </>
  );
};

export default Country;
