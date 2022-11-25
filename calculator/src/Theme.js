import React from "react";
import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaCloudSun } from "react-icons/fa";

const getStorageTheme = () => {
  let theme = "main-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

export default function Theme() {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const mainTheme = () => {
    setTheme("main-theme");
  };
  const lightTheme = () => {
    setTheme("light-theme");
  };
  const purpleTheme = () => {
    setTheme("purple-theme");
  };
  return (
    <header>
      <article>
        <h1>Calc</h1>
      </article>
      <div className="theme-btns">
        <h2> Themes</h2>
        <button onClick={mainTheme}>
          <FaCloudSun className="main" />
        </button>
        <button onClick={lightTheme}>
          <FaSun className="light" />
        </button>
        <button onClick={purpleTheme}>
          <FaMoon className="purple" />
        </button>
      </div>
    </header>
  );
}
