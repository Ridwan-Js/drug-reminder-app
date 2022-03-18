import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import UserLists from "../components/UserLists";

const Users = () => {
  const [userDetails, setUserDetails] = useState([]);
  const useDetailsRef = collection(db, "users");
  useEffect(() => {
    const fetchuserInfo = async () => {
      const getUserInfo = await getDocs(useDetailsRef);
      setUserDetails(
        getUserInfo.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      console.log(
        getUserInfo.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchuserInfo();
  }, []);

  const USER = [
    {
      id: "u1",
      firstName: "Ridwan",
      lastName: "Abidoye",
      image:
        "https://ia600402.us.archive.org/26/items/03-05-2016_Images_Images_1-30/01_PT_hero_42_153645159.jpg",
      places: 3,
    },
    {
      id: "u2",
      firstName: "Akanmu",
      lastName: "Ademola",
      image:
        "https://ia600402.us.archive.org/26/items/03-05-2016_Images_Images_1-30/01_PT_hero_42_153645159.jpg",
      places: 2,
    },
  ];
  return (
    <div className="d-flex justify-content-center align-items-center">
      <UserLists items={userDetails} />
    </div>
  );
};

export default Users;
