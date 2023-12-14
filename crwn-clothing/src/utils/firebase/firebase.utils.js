import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAutovAqSHatj5mHwir02Wo3OUm0jZy0KY",
    authDomain: "crown-clothing-db-9555b.firebaseapp.com",
    projectId: "crown-clothing-db-9555b",
    storageBucket: "crown-clothing-db-9555b.appspot.com",
    messagingSenderId: "251001198559",
    appId: "1:251001198559:web:5ff1890c9834755635166a"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);