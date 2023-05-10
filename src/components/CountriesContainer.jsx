import React, { useState } from "react";
import data from "../data.json";
import CountryCardList from "./CountryCardList";
import SearchBar from "./Searchbar";
import RegionFilter from "./RegionFilter";
import "./CountriesContainer.css";

function CountriesContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleRegionFilter = (regionFilter) => {
    setRegionFilter(regionFilter);
  };

  let filteredData = data.filter((country) =>
    country.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  if (regionFilter) {
    filteredData = filteredData.filter(
      (country) => country.region === regionFilter
    );
  }

  return (
    <>
      <div className="filters">
        <SearchBar onSearch={handleSearch} />
        <RegionFilter onFilter={handleRegionFilter} />
      </div>
      <div className="countriesContainer">
        <CountryCardList data={filteredData} />
      </div>
    </>
  );
}

export default CountriesContainer;
