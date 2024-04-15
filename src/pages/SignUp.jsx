import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "/src/style/login.css";

function SignUp() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const signUpUser = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/login");
      } catch (error) {
        setMsg("Sorry, something went wrong. Please try again");
        console.log(error);
      }
    } else {
      setMsg("Passwords do not match. Please check and try again");
    }
  };

  return (
    <>
      <div className="login-body">
        <div className="box">
          <div className="boxes"></div>
          <div className="card boxes">
            <form action="">
              <h1 className="login">Sign Up</h1>
              <div className="login-input">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Select
                  options={options}
                  value={value}
                  placeholder="Country of Residence"
                  onChange={changeHandler}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </form>
            <button
              type="submit"
              className="btn btn-login"
              onClick={(e) => signUpUser(e)}
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
