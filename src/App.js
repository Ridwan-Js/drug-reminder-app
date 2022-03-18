import React, { useState } from "react";
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

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div className="App">
      <Router>
        <NavBar setIsAuth={setIsAuth} isAuth={isAuth} />
        <main>
          <Routes>
            <Route path="/" element={<Login setIsAuth={setIsAuth} />} exact />
            <Route path="/signup" element={<SignUp />} exact />
            <Route path="/prescribe" element={<Prescription exact />} />
            <Route path="/pList" element={<PrescriptionList exact />} />
            <Route path="/user" element={<Users />} exact />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Routes></Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
