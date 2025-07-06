// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ You missed this import
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRzA2KW7j_Dxcmvrb5MmEQiZkHXVVBo_4",
  authDomain: "messmate-bcf24.firebaseapp.com",
  projectId: "messmate-bcf24",
  storageBucket: "messmate-bcf24.appspot.com", // ✅ fixed typo: .app → .appspot.com
  messagingSenderId: "840755610072",
  appId: "1:840755610072:web:73a6ca1816ffefdbd4f2ad",
  measurementId: "G-11BWVDRWTG"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Now get the services
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app); 

// ✅ Export them
export { auth, analytics,db };
