import data from "../data.json";
import React from "react";
import "./CountryDetail.css";

function CountryDetail({ country, onBack }) {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    currencies,
    languages,
    borders,
    topLevelDomain,
    flag,
  } = country;
  return (
    <>
      <div className="detail">
        <button onClick={onBack} className="back">
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>
        <div className="countryDetail">
          <div>
            <img className="detailFlag" src={flag} alt={`${name} flag`} />
          </div>

          <div className="detailContent">
            <h1 id="country">{name}</h1>
            <div id="detail1">
              <p>
                <span>Native Name:</span> {nativeName}
              </p>
              <p>
                <span>Population:</span> {population.toLocaleString()}
              </p>
              <p>
                <span>Region:</span> {region}
              </p>
              <p>
                <span>Sub Region:</span> {subregion}
              </p>
              <p>
                <span>Capital:</span> {capital}
              </p>
            </div>
            <div id="detail2">
              <p>
                <span>Top Level Domain:</span>{" "}
                {topLevelDomain ? topLevelDomain[0] : ""}
              </p>
              <p>
                <span>Currencies:</span>{" "}
                {currencies
                  ? currencies.map((currency) => currency.name).join(", ")
                  : ""}
              </p>
              <p>
                <span>Languages:</span>{" "}
                {languages
                  ? languages.map((language) => language.name).join(", ")
                  : ""}
              </p>
            </div>
            <div id="borders">
              <span>Border Countries:</span>
              <div className="borderButtons">
                {borders ? (
                  borders.map((border) => (
                    <button key={border}>{border}</button>
                  ))
                ) : (
                  <button>N/A</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetail;
