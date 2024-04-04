import React from "react";
import "/src/style/login.css";

function SignUp() {
  return (
    <>
      <div className="login-body">
        <div className="box">
          <div className="boxes"></div>
          <div className="card boxes">
            <form action="">
              <h1 className="login">Sign Up</h1>
              <div className="login-input">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
                <input type="email" placeholder="Email" required />
                <input type="number" placeholder="Phone Number" required />
                <input
                  type="text"
                  placeholder="Country of Residence"
                  required
                />
                <input type="password" placeholder="Password" required />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </form>
            <button type="submit" className="btn btn-login">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
