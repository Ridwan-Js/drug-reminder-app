import { collection, updateDoc, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import Button from "../../shared/components/FormElements/Button";

const UserItem = (props) => {
  const [updatedFname, setUpdatedFname] = useState(props.firstName);
  const [updatedLname, setUpdatedLname] = useState(props.lastName);
  const [updatedPnumber, setUpdatedPnumber] = useState(props.phoneNUmber);

  const dbRef = collection(db, "usersDetails");

  const updateDocuments = async (id) => {
    const userDoc = doc(db, "usersDetails", id);
    const newFields = {
      firstName: updatedFname,
      lastName: updatedLname,
      phoneNUmber: updatedPnumber,
    };
    await updateDoc(userDoc, newFields);
  };

  return (
    <li className="mt-3">
      <div className="card p-3">
        <h2 className="font-weight-bold mb-3">Personal Data</h2>
        <div>
          <div className="form-group">
            <label>FirrstName:</label>
            <input
              defaultValue={props.firstName}
              className="form-control"
              onChange={(event) => setUpdatedFname(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>LastName:</label>
            <input
              defaultValue={props.lastName}
              className="form-control"
              onChange={(event) => setUpdatedLname(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>phoneNUmber:</label>
            <input
              defaultValue={props.phoneNumber}
              className="form-control"
              onChange={(event) => setUpdatedPnumber(event.target.value)}
            />
          </div>
          <Button onClick={() => updateDocuments(props.id)}>Update</Button>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
