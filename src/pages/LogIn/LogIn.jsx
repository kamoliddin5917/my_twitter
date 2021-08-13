import "./LogIn.scss";
import logo from "../../img/logo.png";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const LogIn = () => {
  const [name, setName] = useState("");
  const history = useHistory();

  const loginSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("token", name);
    if (window.localStorage.getItem("token")) {
      history.push("/");
    }
  };

  return (
    <div className="login">
      <h1 className="login__baza">
        Bazada faqat shu ismla bor:{" "}
        <span className="login__baza-name">toxir, jek, malika, umida </span>
        HOZIRCHA !!!
      </h1>
      <img className="login__logo" src={logo} alt="logo" />
      <h1 className="login__title">Login in to Twitter</h1>
      <form className="login__form" onSubmit={loginSubmit}>
        <input
          className="login__input"
          type="text"
          placeholder="Phone, email or username"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          className="login__input"
          type="password"
          name="password"
          placeholder="Password"
        />

        <button className="login__btn" type="submit">
          Log in
        </button>
        <div className="login__links">
          <Link className="login__link" to="/login">
            Forgot Password?
          </Link>
          <Link className="login__link" to="/signup">
            Sign up For Twitter
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
