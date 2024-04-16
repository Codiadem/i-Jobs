import React from "react";
import { useNavigate } from "react-router-dom";

function Choice() {
  const navigate = useNavigate();

  return (
    <>
      <div className="login-body">
        <div className="box">
          <div className="boxes"></div>
          <div className="card boxes">
            <h1 className="login">Choose a category</h1>
            <button
              type="submit"
              className="btn btn-login"
              onClick={navigate("/sign-up")}
            >
              Employee or Freelancer
            </button>
            <button type="submit" className="btn btn-login">
              Recruiter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choice;
