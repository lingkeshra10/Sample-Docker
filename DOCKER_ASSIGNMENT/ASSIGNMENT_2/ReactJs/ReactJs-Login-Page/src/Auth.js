import React from "react";
import AuthPage from "./components/AuthPage/AuthPage";

function Auth() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" >
        <AuthPage/>
      </form>
    </div>
  );
}

export default Auth;