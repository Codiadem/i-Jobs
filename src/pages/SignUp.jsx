import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

import "/src/style/login.css";

function SignUp() {
  const [email, setEmail] = useState("");
  // const [emailmsg, setEmailMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target, value);
  };

  // const [value, setValue] = useState("");
  // const options = useMemo(countryList().getData(), []);
  // const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  // const emailValidation = () => {
  //   const regEX = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  //   if (regEX.test(email)) {
  //     setEmailMsg(null);
  //   } else if (!regEX.test(email) && email === " ") {
  //     setEmailMsg("Email not Valid");
  //   }
  // };

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
                <input
                  type="text"
                  placeholder="Email"
                  // value={email}
                  // onChange={handleEmail}
                />
                <input type="number" placeholder="Phone Number" />
                <input type="text" placeholder="Country of Residence" />
                {/* <Select
                  options={options}
                  value={value}
                  onChange={changeHandler}
                /> */}
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
              </div>
            </form>
            <button
              type="submit"
              className="btn btn-login"
              // onClick={emailValidation}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
