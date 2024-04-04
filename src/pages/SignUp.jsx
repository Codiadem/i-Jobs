import React from "react";
import "/src/style/login.css";

function SignUp() {
  return (
    <>
      <div className="login-body">
        <div className="sign-up-form card">
          <form action="">
            <h1 className="login">Sign Up</h1>
            <input type="text" placeholder="First Name" required />
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
