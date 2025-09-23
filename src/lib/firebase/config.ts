
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// IMPORTANT: Replace this with your actual Firebase config object
const firebaseConfig = {
  "projectId": "studio-6984305609-5d454",
  "appId": "1:476557699883:web:261750ecc2dd54206ab36e",
  "apiKey": "AIzaSyA5RIn_oG_hybHmLRfRpSONBP7KTXE0HWk",
  "authDomain": "studio-6984305609-5d454.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "476557699883"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
