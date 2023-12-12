// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVkNVxxRMQrRW5cpLfO6mqaM-J0rMI_4s",
  authDomain: "nextjs-auth-project-39881.firebaseapp.com",
  projectId: "nextjs-auth-project-39881",
  storageBucket: "nextjs-auth-project-39881.appspot.com",
  messagingSenderId: "127143138831",
  appId: "1:127143138831:web:f18e278330b6e096da357a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);