import React from "react";
import "/src/style/login.css";
import back from "/src/images/back-icon.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login-body">
        <div className="box">
          <div className="boxes"></div>
          <div className="card boxes">
            <h1 className="login">Login</h1>
            <form action="">
              <div className="login-input">
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Password" required />
              </div>
              <div className="forgot-password">
                Forgot Password?<span> Click Here</span>
              </div>
            </form>
            <button type="submit" className="btn btn-login">
              Login
            </button>
          </div>
          <div className="boxes"></div>
        </div>
        {/* <Link to="/">
        <img src={back} alt="back icon" />
      </Link> */}
      </div>
    </>
  );
}

export default Login;
