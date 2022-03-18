import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXD8VFPvW5FlUXEjzq_x0WhQdIM9i9sqQ",
  authDomain: "drug-reminder-e001c.firebaseapp.com",
  projectId: "drug-reminder-e001c",
  storageBucket: "drug-reminder-e001c.appspot.com",
  messagingSenderId: "697853073606",
  appId: "1:697853073606:web:63140875c891ba1ae35fc7",
  measurementId: "G-73Q163KL15",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
