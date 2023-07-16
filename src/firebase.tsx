import { initializeApp } from 'firebase/app'
import { getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut } from "firebase/auth"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'mock_key',
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app);

const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
    })
  }

const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
    })
}
const logout = () => {
    signOut(auth);
};

export {auth, signup, login, logout}
