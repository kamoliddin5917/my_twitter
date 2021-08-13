import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import useAuth from "../../hooks/useAuth";
import twitts from "../../twitts/Twitts";
import { useEffect, useState } from "react";

const Navbar = ({ userName }) => {
  const [setToken] = useAuth(true);
  const [person, setPerson] = useState({});

  const clearProfil = () => {
    window.localStorage.clear();
    setToken("");
  };

  useEffect(() => {
    if (userName) {
      setPerson(twitts.find((twit) => twit.name === userName));
    }
  }, [person, userName]);
  return (
    <nav className="navbar">
      {person && userName && (
        <img
          className="navbar__profile-img"
          src={person.img}
          alt={`${userName}`}
        />
      )}
      {person && <h2 className="navbar__username">{person.name}</h2>}
      <img className="navbar__logo" src={logo} alt="logo" />
      <ul className="navbar__ul">
        <li className="navbar__list">
          <NavLink
            className="navbar__link navbar__link-home"
            activeClassName="navbar__link-active"
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>

        <li className="navbar__list">
          <NavLink
            className="navbar__link navbar__link-signup"
            activeClassName="navbar__link-active"
            to="/signup"
          >
            Sign up
          </NavLink>
        </li>

        <li className="navbar__list">
          <NavLink
            className="navbar__link navbar__link-login"
            activeClassName="navbar__link-active"
            to="/login"
          >
            Log in
          </NavLink>
        </li>

        <li className="navbar__list">
          <NavLink
            className="navbar__link navbar__link-profile"
            activeClassName="navbar__link-active"
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
      </ul>
      <button className="navbar__btn" onClick={clearProfil}>
        Clear Twitter
      </button>
    </nav>
  );
};

export default Navbar;
