import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConfig";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sinUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          <h3>Sign Up</h3>
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
          <button onClick={sinUp} className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="/">Login?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
