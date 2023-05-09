import "./Searchbar.css";

function SearchBar(props) {
  const handleSearch = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <div className="SearchBarContainer">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
