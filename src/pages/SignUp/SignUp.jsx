import "./SignUp.scss";
import logoSignup from "../../img/logo-signup.png";
import logo from "../../img/logo.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [input, setInput] = useState("");
  const history = useHistory();

  const signUpFn = (e) => {
    e.preventDefault();
    window.localStorage.setItem("token", input);
    document.querySelector(".signup__input-name").value = "";

    if (window.localStorage.getItem("token")) {
      history.push("/");
    }
  };

  return (
    <div className="signup">
      <h1 className="login__baza">
        Bazada faqat shu ismla bor:{" "}
        <span className="login__baza-name">toxir, jek, malika, umida </span>
        HOZIRCHA !!!
      </h1>
      <div className="signup__body">
        <div className="signup__top">
          <img className="signup__logo" src={logoSignup} alt="logo signup" />

          <form className="signup__form" onSubmit={signUpFn}>
            <div className="signup__form-top">
              <img className="signup__form-logo" src={logo} alt="logo" />
              <button className="signup__form-btn" type="submit">
                Next
              </button>
            </div>

            <p className="signup__form-title">Create your account</p>

            <label className="signup__label" htmlFor="name">
              <input
                className="signup__input signup__input-name"
                type="text"
                name="name"
                id="name"
                required
                autoComplete="off"
                onChange={(e) => setInput(e.target.value)}
              />
              <span className="signup__span">Name</span>
              <span className="signup__span-number">0/50</span>
            </label>

            <label className="signup__label" htmlFor="tell">
              <input
                className="signup__input"
                id="tell"
                type="tel"
                name="tell"
                autoComplete="off"
              />
              <span className="signup__span">Phone</span>
            </label>

            <span className="signup__email">Use email instead</span>

            <p className="signup__data-title">Date of birth</p>
            <p className="signup__data-text">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>

            <div className="signup__data">
              <label
                className="signup__label signup__label-month"
                htmlFor="month"
              >
                <input
                  className="signup__input "
                  id="month"
                  type="month"
                  name="month"
                  autoComplete="off"
                />
                <span className="signup__span">Month</span>
              </label>

              <label className="signup__label signup__label-year" htmlFor="day">
                <input
                  className="signup__input"
                  id="day"
                  type="number"
                  name="day"
                  min="0"
                  max="31"
                  autoComplete="off"
                />
                <span className="signup__span">Day</span>
              </label>

              <label
                className="signup__label signup__label-year"
                htmlFor="year"
              >
                <input
                  className="signup__input"
                  id="year"
                  type="number"
                  name="name"
                  autoComplete="off"
                />
                <span className="signup__span">Year</span>
              </label>
            </div>
          </form>
        </div>
        <h1 className="signup__bottom">twitter signup</h1>
      </div>
    </div>
  );
};

export default SignUp;
