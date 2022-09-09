import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/signin.scss";

const SignIn = () => {
  return (
    <div className="container">
      <h2>Se connecter</h2>
      <form action="" method="get">
        <div className="cards">
          <input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="cards">
          <input
            placeholder="Mot de passe  "
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div>
          <NavLink to="/accueil">
            <button type="submit">Se connecter </button>
          </NavLink>
        </div>
        <NavLink to="/signUp">Avez vous deja un compte ?</NavLink>

        <NavLink to="/forgot-password">Mot de passe oublié ?</NavLink>
      </form>
    </div>
  );
};

export default SignIn;
