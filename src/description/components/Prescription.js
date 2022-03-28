import React, { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
const Prescription = () => {
  const [prescription, setPrescription] = useState("");
  const [phoneNUmber, setPhoneNumber] = useState("");
  const [time, setTime] = useState("");

  let navigate = useNavigate();

  const savePrescription = async (event) => {
    event.preventDefault();
    try {
      const prescribeDoc = await addDoc(collection(db, "users"), {
        userInfo: {
          displayName: auth.currentUser.displayName,
          phoneNUmber: phoneNUmber,
        },
        userId: auth.currentUser.uid,
        prescription: prescription,
        time: time,
      });
      alert("saved Successfully");
      navigate("/pList");
      console.log("Document written with ID: ", prescribeDoc.id);
    } catch (error) {
      console.log("Error adding document: ", error);
    }
    // console.log(firstName, lastName, prescription, phoneNUmber);
  };

  return (
    <div className="px-3">
      <h2 className="text-white font-weight-bold">Welcome</h2>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={savePrescription}>
            <div className="form-group">
              <label htmlFor="email">Enter Prescription Details:</label>
              <textarea
                className="form-control"
                rows="3"
                onChange={(event) => {
                  setPrescription(event.target.value);
                }}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Phone Number"
                id="phonumber"
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time to be Taken (date and time):</label>
              <input
                type="datetime-local"
                id="time"
                name="time"
                className="form-control"
                onChange={(event) => {
                  setTime(event.target.value);
                }}
              />
            </div>

            <div className="form-group ">
              <Button type="submit" className="button">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
