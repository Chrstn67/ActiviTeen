"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { activities } from "../data/activities";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest(".main-nav") &&
        !event.target.closest(".menu-toggle")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  // Extract unique tags from all activities
  const allTags = [...new Set(activities.flatMap((activity) => activity.tags))];

  // Extract unique types from all activities
  const allTypes = [...new Set(activities.map((activity) => activity.type))];

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <h1>ActiviTeen</h1>
          <span className="tagline">Activités BAFA 11-17 ans</span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Menu principal"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" onClick={closeMenu} className="nav-link">
                Accueil
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className="dropdown-toggle nav-link"
                onClick={() => toggleDropdown("categories")}
                aria-expanded={activeDropdown === "categories"}
              >
                Catégories
                <span
                  className={`dropdown-arrow ${
                    activeDropdown === "categories" ? "active" : ""
                  }`}
                ></span>
              </button>
              <ul
                className={`dropdown-menu ${
                  activeDropdown === "categories" ? "show" : ""
                }`}
              >
                {allTags.map((tag) => (
                  <li key={tag} className="dropdown-item">
                    <Link
                      to={`/?tag=${tag}`}
                      onClick={closeMenu}
                      className="dropdown-link"
                    >
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button
                className="dropdown-toggle nav-link"
                onClick={() => toggleDropdown("types")}
                aria-expanded={activeDropdown === "types"}
              >
                Types d'activités
                <span
                  className={`dropdown-arrow ${
                    activeDropdown === "types" ? "active" : ""
                  }`}
                ></span>
              </button>
              <ul
                className={`dropdown-menu ${
                  activeDropdown === "types" ? "show" : ""
                }`}
              >
                {allTypes.map((type) => (
                  <li key={type} className="dropdown-item">
                    <Link
                      to={`/?type=${type}`}
                      onClick={closeMenu}
                      className="dropdown-link"
                    >
                      {type}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/?sort=age" onClick={closeMenu} className="nav-link">
                Par âge
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/?sort=duration"
                onClick={closeMenu}
                className="nav-link"
              >
                Par durée
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
