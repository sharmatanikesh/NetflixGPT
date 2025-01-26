// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBylhiDeZc5YJHVD-8Dc5jNilHXGIH843Q",
  authDomain: "netflixgpt-3a413.firebaseapp.com",
  projectId: "netflixgpt-3a413",
  storageBucket: "netflixgpt-3a413.firebasestorage.app",
  messagingSenderId: "161944884949",
  appId: "1:161944884949:web:8f762d104183b747d8f45c",
  measurementId: "G-QC6THBMD1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(app);