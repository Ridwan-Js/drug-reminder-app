import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

const PrescriptionList = () => {
  const [postList, setPostList] = useState([]);
  const prescriptionDbRef = collection(db, "users");

  useEffect(() => {
    const getPrescription = async () => {
      const data = await getDocs(prescriptionDbRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPrescription();
  }, []);

  const deletePrescription = async (id) => {
    const PrescriptionDoc = doc(db, "users", id);
    await deleteDoc(PrescriptionDoc);
    window.location.reload();
  };
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center px-4">
        <div className="card p-4 shadow w-75">
          <h4 className="font-weight-bold text-center">
            List of Saved Prescription
          </h4>
          <ul className="list-unstyled m-0">
            {postList.map((prescribe) => {
              return (
                <li key={prescribe.prescription}>
                  <div className=" mt-3">
                    <h4>{prescribe.prescription}</h4>
                    <span className="d-inline-block">{prescribe.time}</span>
                    <div className="d-flex justify-content-end">
                      <button
                        className="button--inverse rounded-sm border-danger"
                        onClick={() => {
                          deletePrescription(prescribe.id);
                        }}
                      >
                        Delete
                      </button>
                      <div className="custom-control custom-checkbox d-inline ml-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={prescribe.time}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={prescribe.time}
                        >
                          Completed
                        </label>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <div className="card p-4">
        <h4>Prescription Reminder</h4>
        <ul className="list-unstyled m-0">
          <li>
            <div className="d-flex mt-3">
              <h4>Four Paracetamol</h4>
              <span className="d-inline-block">12/23/2021</span>
            </div>
          </li>
          <li>
            <div className="d-flex mt-3">
              <h4>Four Paracetamol</h4>
              <span className="d-inline-block">12/23/2021</span>
            </div>
          </li>
          <li>
            <div className="d-flex  mt-3">
              <h4>Four Paracetamol</h4>
              <span className="d-inline-block">12/23/2021</span>
            </div>
          </li>
        </ul>
      </div> */}
    </React.Fragment>
  );
};

export default PrescriptionList;
