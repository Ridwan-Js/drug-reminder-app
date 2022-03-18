import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Button from "../../shared/components/FormElements/Button";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user._tokenResponse);
      if (user._tokenResponse.idToken) {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        setIsLogin(true);
        navigate("/prescribe");
        console.log("Ridwan does it");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          <h3>Login</h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <Button onClick={login} className="btn btn-block button">
            Login
          </Button>
          <p className="forgot-password text-right">
            Don't have an account <Link to="/signup">SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
