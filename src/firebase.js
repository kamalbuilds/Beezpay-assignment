import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYdjiZVqN7370boaQ0Q3KC3oHRHe6Aq9A",
  authDomain: "beezhive-c969d.firebaseapp.com",
  projectId: "beezhive-c969d",
  storageBucket: "beezhive-c969d.appspot.com",
  messagingSenderId: "639828278637",
  appId: "1:639828278637:web:a78dff103ca7f855c96e64",
  measurementId: "G-HDY21MDPCP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
