import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    return (
      <>
        <form action="" method="post">
          <div>
            <label>
              Nom
              <input
                placeholder="votre Nom "
                type="text"
                id="nom"
                name="nom"
                required
              />
            </label>
          </div>

          <div>
            <label>
              Prenom
              <input
                placeholder="votre Prenom "
                type="text"
                id="prenom"
                name="prenom"
                required
              />
            </label>
          </div>

          <div>
            <label>
              Email
              <input
                placeholder="votre Email "
                type="email"
                id="email"
                name="email"
                required
              />
            </label>
          </div>

          <div>
            <label>
              Mot de passe
              <input
                placeholder="votre Email "
                type="email"
                id="email"
                name="email"
                required
              />
            </label>
          </div>
          <div>
            <button type="submit">Envoyer</button>
          </div>
        </form>
        <NavLink to='/signin'>J'ai deja un compte</NavLink>
      </>
    );
};

export default SignUp;