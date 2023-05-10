import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import CountriesContainer from "./components/CountriesContainer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <CountriesContainer />
    </div>
  );
}

export default App;
