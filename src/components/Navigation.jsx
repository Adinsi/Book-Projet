import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.scss';

const Navigation = () => {
     const [show, setShow] = useState(false);

     const handleclick = () => {
       setShow(!show);
     };

    return (
      <nav>
        <div className={show ? "links active" : "links"}>
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to="/accueil"
          >
            Accueil
          </NavLink>
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to="/livres"
          >
            Livres
          </NavLink>
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to="/exercices"
          >
            Exercices
          </NavLink>
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div className="heroes">
          <h1>Lire n'a jamais été si facile</h1>
          <p>
            Communiquer avec <span>Dieu </span>chaque matin
          </p>
          <h2>Job 6 : 20</h2>
        </div>

        <div onClick={handleclick} className="burger">
          <i className={show ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </div>
      </nav>
    );
};

export default Navigation;