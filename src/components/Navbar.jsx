import React from "react";
import "./Navbar.css";

function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <nav className="Navbar">
      <h1>Where in the world?</h1>
      <button className="mode-switcher" onClick={toggleDarkMode}>
        <i className={`fa-regular ${isDarkMode ? " fa-sun" : "fa-moon"}`}></i>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
