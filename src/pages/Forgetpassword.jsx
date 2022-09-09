import React from 'react';

const Forgetpassword = () => {
    return (
        <>
        <form action="" method="post">
          <div>
            <label>
              Email 
              <input
                placeholder="votre Email "
                type="text"
                id="email"
                name="email"
                required
              />
            </label>
          </div>
          <div>
            <button>Vérifier l'email</button>
          </div>
          </form>
          </>
    );
};

export default Forgetpassword;