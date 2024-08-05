import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from './Button'
import "../my_style.css";
import { useAuth } from "@/features/authentication";

export function MyNav() {
  const { user, logout } = useAuth();
  const [activeButton, setActiveButton] = useState(null);
  const [theme, setTheme] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem("THEME")) || "light";
    return savedTheme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : savedTheme;
  });

  console.log(user);
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
    setActiveButton(null); 
  };

  return (
    <div style={{ position: "relative" }}>
      <nav className="sticky-nav">
        <div className="float-left">
          <a href="/">AXL</a>
        </div>
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
                to="/tasks"
                title="Task Board"
                isActive={activeButton === "link"}
                onToggle={() => handleToggle("link")}
              />
            </li>
            <li>
              <Button
                type="link"
                to="/jobs"
                title="Job Listing"
                isActive={activeButton === "job-link"}
                onToggle={() => handleToggle("job-link")}
              />
            </li>
            {user ? (
              <li>
                <Button
                  type="logged-in"
                  to="#"
                  title={user.email}
                  isActive={activeButton === "logged-in"}
                  onToggle={() => handleToggle("logged-in")}
                >
                  <ul className="dropdown-content">
                    <li>
                      <Link
                        to="/jobs/my-listings"
                        onClick={() => setActiveButton(false)}
                      >
                        Listing
                      </Link>
                    </li>
                    <li>
                      <Link onClick={logout}>Logout</Link>
                    </li>
                  </ul>
                </Button>
              </li>
            ) : (
              <li>
                <Button
                  type="login"
                  to="/login"
                  title="Login"
                  isActive={activeButton === "login"}
                  onToggle={() => handleToggle("login")}
                />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

