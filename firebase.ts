import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDAjsH_wtFkolIGyU-AL8EerAsmTzUZHog",
  authDomain: "auth-agrinet.firebaseapp.com",
  projectId: "auth-agrinet",
  storageBucket: "auth-agrinet.firebasestorage.app",
  messagingSenderId: "548395900180",
  appId: "1:548395900180:web:b552443e56019290803601",
  measurementId: "G-TV4JK1TPME"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);