import Link from "next/link";
import Header from "../../components/Header";

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v2/all");
  const countries = await res.json();

  const paths = countries.map(country => ({
    params: { id: country.alpha3Code },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v2/alpha/${params.id}`);
  const country = await res.json();

  return {
    props: {
      country,
    },
  };
};

const Country = ({ country }) => {
  const flag = country.flags[0];

  const addCommasToPopulation = population => {
    //adds commas to populations > 1,000
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <Header />
      <main className="flex flex-col">
        <div className="w-16 mt-10 mb-16 ml-7 shadow-back lg:mt-20 lg:ml-20">
          <ion-icon name="arrow-back-outline" />
          <Link href="/">
            <button className="ml-2">Back</button>
          </Link>
        </div>
        <section className="flex flex-col items-start ml-7 lg:flex-row lg:ml-20 lg:justify-between">
          <img
            src={flag}
            alt={`${country} flag`}
            className="w-320 h-229 mb-11 lg:w-560 lg:h-401"
          />
          <div className="pr-44">
            <h1 className="font-800 text-22 leading-30 lg:mt-7">
              {country.name}
            </h1>
            <div className="lg:flex lg:flex-row lg:mt-4">
              <div className="flex flex-col mt-4">
                <span className="flex flex-row mb-1">
                  <h3 className="font-400 text-14 leading-32 mr-2">
                    Native Name:
                  </h3>
                  <p className="font-300 text-14 leading-32">
                    {country.nativeName}
                  </p>
                </span>
                <span className="flex flex-row mb-1">
                  <h3 className="font-400 text-14 leading-32 mr-2">
                    Population:
                  </h3>
                  <p className="font-300 text-14 leading-32">
                    {addCommasToPopulation(country.population)}
                  </p>
                </span>
                <span className="flex flex-row mb-1">
                  <h3 className="font-400 text-14 leading-32 mr-2">Region:</h3>
                  <p className="font-300 text-14 leading-32">
                    {country.continent}
                  </p>
                </span>
                <span className="flex flex-row mb-1">
                  <h3 className="font-400 text-14 leading-32 mr-2">
                    Sub Region:
                  </h3>
                  <p className="font-300 text-14 leading-32">
                    {country.region}
                  </p>
                </span>
                <span className="flex flex-row mb-1">
                  <h3 className="font-400 text-14 leading-32 mr-2">Capital:</h3>
                  <p className="font-300 text-14 leading-32">
                    {country.capital}
                  </p>
                </span>
              </div>
              <div className="mt-8 lg:mt-4 lg:mr-20 lg:ml-32">
                <span className="flex flex-row mb-1">
                  <h3 className="font-400 text-14 leading-32 mr-2">
                    Top Level Domain:
                  </h3>
                  <p className="font-300 text-14 leading-32">
                    {country.topLevelDomain.map(domain => domain).join(", ")}
                  </p>
                </span>
                <span className="flex flex-row mb-1 mr-7">
                  <h3 className="font-400 text-14 leading-32 mr-2">
                    Currencies:
                  </h3>
                  <p className="font-300 text-14 leading-32">
                    {country.currencies
                      .map(currency => currency.name)
                      .join(", ")}
                  </p>
                </span>
                <span className="flex flex-row mb-1 mr-7">
                  <h3 className="font-400 text-14 leading-32 mr-2">
                    Languages:
                  </h3>
                  <p className="font-300 text-14 leading-32">
                    {country.languages
                      .map(language => language.name)
                      .join(", ")}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Country;
