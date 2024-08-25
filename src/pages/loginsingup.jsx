import React from "react";
import "./css/loginsignup.css";

const Loginsingup = () => {
  return (
    <div className="loginsingup">
      <div className="loginsignup-container">
        <h1>sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your name " />
          <input type="email" name="" id="" placeholder="Email address" />
          <input type="password" name="" id="" placeholder="password" />
        </div>
        <button>continue</button>
        <p className="loginsignup-login">
          Already have an account ? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="chechbox" />
          <p>By continuing , i agree to the term of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Loginsingup;
