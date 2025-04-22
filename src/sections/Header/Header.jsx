import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import Button from "../../components/Button/Button";

/**
 * Header component with navigation and actions.
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation links data
  const navLinks = [
    { name: "Startups", path: "/startups" },
    { name: "Investors", path: "/investors" },
    { name: "Job Seeker", path: "/job-seeker" },
    { name: "Messages", path: "/messages" },
    { name: "Help", path: "/help" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles["header__container"]}>
        {/* Logo */}
        <Link
          to="/"
          className={styles["header__logo"]}
          aria-label="Go to COREUP homepage"
        >
          <img
            src={logo}
            alt="COREUP Logo"
            loading="lazy"
            width="150"
            height="24"
          />
        </Link>

        {/* Navigation */}
        <nav
          id="main-nav"
          className={`${styles["header__nav"]} ${
            isMenuOpen ? styles["header__nav--open"] : ""
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className={styles["header__nav-list"]}>
            {navLinks.map((link, index) => (
              <li key={index} className={styles["header__nav-item"]}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${styles["header__nav-link"]} ${
                      isActive ? styles["header__nav-link--active"] : ""
                    }`
                  }
                  aria-current={(isActive) => (isActive ? "page" : undefined)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Actions for Mobile */}
          <div
            className={`${styles["header__actions"]} ${styles["header__actions--mobile"]}`}
          >
            <Button
              className="btn--primary"
              to="/join"
              ariaLabel="Join now"
              onClick={() => setIsMenuOpen(false)}
            >
              Join now
            </Button>
            <Link
              to="/login"
              className={styles["header__login"]}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Login to COREUP"
            >
              Login
            </Link>
          </div>
        </nav>

        {/* Actions for Desktop */}
        <div
          className={`${styles["header__actions"]} ${styles["header__actions--desktop"]}`}
        >
          <Button
            className="btn--primary"
            to="/join"
            ariaLabel="Join now"
            onClick={() => setIsMenuOpen(false)}
          >
            Join now
          </Button>
          <Link
            to="/login"
            className={styles["header__login"]}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Login to COREUP"
          >
            Login
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className={styles["header__hamburger"]}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
        >
          <span className={styles["header__hamburger-icon"]}>
            {isMenuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);
