import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebaseConfig";
import { collection, getDocs, where, query } from "firebase/firestore";
import UserLists from "../components/UserLists";

const Users = () => {
  const [userDetails, setUserDetails] = useState([]);
  const useDetailsRef = query(
    collection(db, "usersDetails"),
    where("userId", "==", auth.currentUser.uid)
  );
  useEffect(() => {
    const fetchuserInfo = async () => {
      const getUserInfo = await getDocs(useDetailsRef);
      console.log(getUserInfo);
      setUserDetails(
        getUserInfo.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchuserInfo();
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <UserLists items={userDetails} />
    </div>
  );
};

export default Users;
