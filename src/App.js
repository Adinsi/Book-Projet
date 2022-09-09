import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Forgetpassword from "./pages/Forgetpassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<SignIn />} />
          <Route exact path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/forgot-password" element={<Forgetpassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
