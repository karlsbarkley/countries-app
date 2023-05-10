import "./CountryCardList.css";
import CountryDetail from "./CountryDetail";
import { useState } from "react";

function CountryCardList({ data }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  const handleBack = () => {
    setSelectedCountry(null);
  };

  if (selectedCountry) {
    return <CountryDetail country={selectedCountry} onBack={handleBack} />;
  }

  return (
    <>
      {data.map((country) => (
        <div
          className="cardContainer"
          key={country.alpha3Code}
          onClick={() => handleSelectCountry(country)}
        >
          <div className="cardImg">
            <img src={country.flag} alt="" />
          </div>
          <div className="cardContent">
            <h2>{country.name}</h2>
            <p>
              <span>Population:</span> {country.population.toLocaleString()}
            </p>
            <p>
              <span>Region:</span> {country.region}
            </p>
            <p>
              <span>Capital:</span> {country.capital}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CountryCardList;
