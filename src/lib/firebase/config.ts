
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// IMPORTANT: Replace this with your actual Firebase config object
export const firebaseConfig = {
  "projectId": "studio-6984305609-5d454",
  "appId": "1:476557699883:web:0ce0601acaf5df576ab36e",
  "apiKey": "AIzaSyA5RIn_oG_hybHmLRfRpSONBP7KTXE0HWk",
  "authDomain": "studio-6984305609-5d454.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "476557699883"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export { app };
