import "./RegionFilter.css";
function RegionFilter(props) {
  const handleFilter = (event) => {
    props.onFilter(event.target.value);
  };

  return (
    <select className="RegionFilter" onChange={handleFilter}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default RegionFilter;
