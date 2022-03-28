import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNUmber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const savePrescription = async () => {
    try {
      const prescribeDoc = await addDoc(collection(db, "usersDetails"), {
        firstName: firstName,
        lastName: lastName,
        phoneNUmber: phoneNUmber,
        userId: auth.currentUser.uid,
      });
      alert("saved Successfully");
      console.log("Document written with ID: ", prescribeDoc.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    // console.log(firstName, lastName, prescription, phoneNUmber);
  };

  const sinUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        savePrescription();
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
        setPhoneNumber("");
        console.log(user);
        alert("SignUp Successfully");
      } else {
        console.log("users creation not successful");
      }
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
              value={email}
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
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Phone Number"
              id="phonumber"
              value={phoneNUmber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
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
