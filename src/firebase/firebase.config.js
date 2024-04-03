// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkGtEG9XS9dYixUPiAIDzm7dDvjUxg-UU",
  authDomain: "daily-portal.firebaseapp.com",
  projectId: "daily-portal",
  storageBucket: "daily-portal.appspot.com",
  messagingSenderId: "259007992649",
  appId: "1:259007992649:web:1f76fb2493f0c91258c098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;