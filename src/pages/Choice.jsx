import React from "react";
import { Link } from "react-router-dom";

function Choice() {
  return (
    <>
      <div className="login-body">
        <div className="box">
          <div className="boxes"></div>
          <div className="card boxes">
            <h1 className="login">Choose a category</h1>
            <Link to="/sign-up">
              <button type="submit" className="btn btn-login">
                Employee or Freelancer
              </button>
              <button type="submit" className="btn btn-login">
                Recruiter
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choice;
