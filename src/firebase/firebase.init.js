// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuy0oeCfWMVOYRhUC70IkKCuKyNiI_0p0",
  authDomain: "job-portal-authentication.firebaseapp.com",
  projectId: "job-portal-authentication",
  storageBucket: "job-portal-authentication.firebasestorage.app",
  messagingSenderId: "688617956053",
  appId: "1:688617956053:web:d07c3d9a8c0d3098c7f85c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
