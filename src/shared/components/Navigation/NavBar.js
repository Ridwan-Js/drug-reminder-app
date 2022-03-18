import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

const NavBar = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();
  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow">
      <div className="container">
        <Link className="navbar-brand font-weight-Bold text-primary" to={"/"}>
          Drug Reminder
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {!isAuth ? (
                <Link className="nav-link" to={"/"}>
                  Login
                </Link>
              ) : (
                <button className="nav-link border-0" onClick={logOut}>
                  LogOut
                </button>
              )}
            </li>
            <li className="nav-item">
              {!isAuth && (
                <Link className="nav-link" to={"/signup"}>
                  Sign up
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isAuth && (
                <Link className="nav-link" to={"/user"}>
                  My Profile
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isAuth && (
                <Link className="nav-link" to={"/pList"}>
                  Prescription list
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
