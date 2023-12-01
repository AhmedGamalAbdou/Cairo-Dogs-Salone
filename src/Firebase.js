import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCefv1wLuU2mnFupmmNwcOpC22Aa-L4iWM",
  authDomain: "dog-salone.firebaseapp.com",
  projectId: "dog-salone",
  storageBucket: "dog-salone.appspot.com",
  messagingSenderId: "868426687604",
  appId: "1:868426687604:web:3fc0b269543650eabd5d21",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
