
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6AHZwgsmHf5nee6GmOFNaRO6VEpqZvss",
  authDomain: "private-user.firebaseapp.com",
  projectId: "private-user",
  storageBucket: "private-user.firebasestorage.app",
  messagingSenderId: "333243726796",
  appId: "1:333243726796:web:c9983931f2a174e98e3b69",
  measurementId: "G-7LBECGPDJH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();