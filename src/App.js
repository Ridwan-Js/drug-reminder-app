import React, { useState, useCallback } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import "./App.css";
import NavBar from "./shared/components/Navigation/NavBar";
import Login from "./user/pages/Login";
import SignUp from "./user/pages/SignUp";
import Prescription from "./description/components/Prescription";
import PrescriptionList from "./description/components/PrescriptionList";
import UserLists from "./user/components/UserLists";
import Users from "./user/pages/Users";
import { AuthContext } from "./shared/context/loginContext";

function App() {
  // const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  let routes;
  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Login />} exact />
        <Route path="/prescribe" element={<Prescription exact />} />
        <Route path="/pList" element={<PrescriptionList exact />} />
        <Route path="/user" element={<Users />} exact />
        <Route path="*" element={<Navigate to="/" />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Login />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="*" element={<Navigate to="/" />} />
      </React.Fragment>
    );
  }
  return (
    <div className="App">
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <Router>
          <NavBar />
          <main>
            <Routes>{routes}</Routes>
            <Routes></Routes>
          </main>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
