import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmSc-cfsrZnZAcxyBfl6C38ZiD4eLoQPk",
  authDomain: "crowdpe-6ba17.firebaseapp.com",
  projectId: "crowdpe-6ba17",
  storageBucket: "crowdpe-6ba17.appspot.com",
  messagingSenderId: "652386881175",
  appId: "1:652386881175:web:5c1b94516696dd0974a3d2",
  measurementId: "G-LXG6QNZBDG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
