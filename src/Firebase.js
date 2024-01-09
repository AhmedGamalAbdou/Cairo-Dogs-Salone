import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDvA6_UdnUxUwfsNMaMjNKBP90DIVrbOk",
  authDomain: "salone-b178e.firebaseapp.com",
  projectId: "salone-b178e",
  storageBucket: "salone-b178e.appspot.com",
  messagingSenderId: "878282002058",
  appId: "1:878282002058:web:95a1978ebb362514022773",
};

// Initialize Firebase
// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
