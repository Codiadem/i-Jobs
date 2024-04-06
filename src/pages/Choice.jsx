import React from "react";

function Choice() {
  const employee = (e) => {
    e.preventDefault();
    // const signEmployee = (e) => {
    //   //   (is "Employee or Freelancer"? set data to db for employee : set data to db for employee)
    // };
  };

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
              //   onClick={signEmployee}
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
