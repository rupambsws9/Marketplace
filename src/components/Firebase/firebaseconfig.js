import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBeNbrxVtTLowKyYqe9ZQFjKbL2dHkHsPE",
  authDomain: "marketplace-e1644.firebaseapp.com",
  projectId: "marketplace-e1644",
  storageBucket: "marketplace-e1644.appspot.com",
  messagingSenderId: "604935801887",
  appId: "1:604935801887:web:5372833809eb63cdfe192a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
