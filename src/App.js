import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import CountriesContainer from "./components/CountriesContainer";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesContainer />
    </div>
  );
}

export default App;
