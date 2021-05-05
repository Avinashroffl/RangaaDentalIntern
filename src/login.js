import React from "react";
import "./Styles/login.css";
import logo from "./img/logo.png";

function login() {
  return (
    <div>
      <div className="login">
        <div className="login-container">
          <label>
            <input type="text" name="username" placeholder="Enter User Name" />
          </label>
          <br />
          
          <label>
            <input type="password" name="password" placeholder="Enter Password" />
          </label>
          <br />

          <button type="submit" className="btn">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default login;
