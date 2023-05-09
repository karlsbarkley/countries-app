import "./CountryCardList.css";

function CountryCardList(props) {
  return (
    <>
      <div className="countriesContainer">
        {props.data.map((country) => (
          <div className="cardContainer">
            <div className="cardImg">
              <img className="flag" src={country.flag} alt="" />
            </div>
            <div className="cardContent">
              <h2>{country.name}</h2>
              <p>
                <span>Population:</span> {country.population}
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
      </div>
    </>
  );
}

export default CountryCardList;
