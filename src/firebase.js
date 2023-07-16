import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_6G8GLPWwTrmMv2apRWoJoVk75sKWO2A",
  authDomain:"auth-demo-3f49e.firebaseapp.com",
  projectId: "auth-demo-3f49e",
  storageBucket: "auth-demo-3f49e.appspot.com",
  messagingSenderId: "326838930554",
  appId:"1:326838930554:web:af752365aa39264d90ffc3",
  measurementId: "G-NED6Y8FZC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
