import { useState } from "react";
import "/src/style/login.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import back from "/src/images/back-icon.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/find-jobs");
    } catch (error) {
      setMsg("Your username or password is incorrect");
    }
  };

  return (
    <>
      <div className="login-body">
        <div className="box">
          <div className="boxes"></div>
          <div className="card boxes">
            <h1 className="login">Welcome Back!</h1>
            <form action="">
              <div className="login-input">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="forgot-password">
                Forgot Password?<span> Click Here</span>
              </div>
            </form>
            <span className="text-error">{"" !== msg && msg}</span>
            <button type="submit" className="btn btn-login" onClick={loginUser}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
