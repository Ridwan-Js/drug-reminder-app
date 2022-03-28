import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { AuthContext } from "../../context/loginContext";
import "./NavBar.css";

const NavBar = ({ isAuth, setIsAuth }) => {
  const authen = useContext(AuthContext);
  let navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow">
      <div className="container">
        <Link className="navbar-brand font-weight-Bold text-primary" to={"/"}>
          Drug Reminder
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {!authen.isLoggedIn && (
                <Link className="nav-link" to={"/"}>
                  Login
                </Link>
              )}
            </li>
            <li className="nav-item">
              {!authen.isLoggedIn && (
                <Link className="nav-link" to={"/signup"}>
                  Sign up
                </Link>
              )}
            </li>
            <li className="nav-item">
              {authen.isLoggedIn && (
                <Link className="nav-link" to={"/user"}>
                  My Profile
                </Link>
              )}
            </li>
            <li className="nav-item">
              {authen.isLoggedIn && (
                <Link className="nav-link" to={"/pList"}>
                  Prescription list
                </Link>
              )}
            </li>
            <li className="nav-item">
              {authen.isLoggedIn && (
                <Link className="nav-link" to={"/prescribe"}>
                  Enter Prescription
                </Link>
              )}
            </li>
            <li className="nav-item">
              {authen.isLoggedIn && (
                <button onClick={authen.logout} className="border-0 logOutBtn">
                  LOGOUT
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
