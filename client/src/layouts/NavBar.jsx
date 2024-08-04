import React, { useState, useEffect } from "react";
import "../utils/navbar.css";

export function NavBar() {
  const [activeButton, setActiveButton] = useState(null);
  const [theme, setTheme] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem("THEME")) || "light";
    return savedTheme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : savedTheme;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("THEME", JSON.stringify(theme));
  }, [theme]);

  const handleToggle = (buttonType) => {
    setActiveButton((prevButton) =>
      prevButton === buttonType ? null : buttonType
    );
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setActiveButton(null); // Close dropdown after selecting theme
  };

  return (
    <div style={{ position: "relative" }}>
      <nav className="sticky-nav">
        <div className="float-left"><a href="/">AXL</a></div>
        <div className="float-right">
          <ul className="level-1">
            <li>
              <Button
                type="mode-icon"
                isActive={activeButton === "mode-icon"}
                onToggle={() => handleToggle("mode-icon")}
              >
                <ul className="dropdown-content">
                  <li>
                    <button onClick={() => handleThemeChange("light")}>
                      Light
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleThemeChange("dark")}>
                      Dark
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleThemeChange("system")}>
                      System
                    </button>
                  </li>
                </ul>
              </Button>
            </li>
            <li>
              <Button
                type="link"
                to="/task-board"
                title="Task Board"
                isActive={activeButton === "link"}
                onToggle={() => handleToggle("link")}
              />
            </li>
            <li>
              <Button
                type="dropdown"
                to="#"
                title="Job Listing"
                isActive={activeButton === "dropdown"}
                onToggle={() => handleToggle("dropdown")}
              >
                <ul className="dropdown-content">
                  <li>
                    <a href="#">Option 1</a>
                  </li>
                  <li>
                    <a href="#">Option 1</a>
                  </li>
                  <li>
                    <a href="#">Option 1</a>
                  </li>
                </ul>
              </Button>
            </li>
            <li>
              <Button
                type="login"
                to="#"
                title="Login"
                isActive={activeButton === "login"}
                onToggle={() => handleToggle("login")}
              />
            </li>
            <li>
              <Button
                type="logged-in"
                to="#"
                title="Profile"
                isActive={activeButton === "logged-in"}
                onToggle={() => handleToggle("logged-in")}
              >
                <ul className="dropdown-content">
                  <li>
                    <a href="#">Option 1</a>
                  </li>
                  <li>
                    <a href="#">Option 1</a>
                  </li>
                  <li>
                    <a href="#">Option 1</a>
                  </li>
                </ul>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

function Button({ type, to, title, isActive, onToggle, children }) {
  return (
    <>
      {type === "mode-icon" && (
        <div className={`icon-button ${isActive ? "active" : ""}`}>
          <button className="dropdown-button" onClick={onToggle}>
            🌓
          </button>
          {isActive && children}
        </div>
      )}

      {type === "link" && (
        <a
          href={to}
          className={`link-button ${isActive ? "active" : ""}`}
          onClick={onToggle}
        >
          {title}
        </a>
      )}

      {type === "dropdown" && (
        <div className={`dropdown ${isActive ? "active" : ""}`}>
          <button className="dropdown-button" onClick={onToggle}>
            {title}
          </button>
          {isActive && children}
        </div>
      )}

      {type === "login" && (
        <button
          className={`login-button ${isActive ? "active" : ""}`}
          onClick={onToggle}
        >
          <a href={to}>{title}</a>
        </button>
      )}

      {type === "logged-in" && (
        <div className={`logged-in-menu ${isActive ? "active" : ""}`}>
          <span onClick={onToggle}>{title}</span>
          {isActive && children}
        </div>
      )}
    </>
  );
}
