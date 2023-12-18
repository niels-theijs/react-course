import { initializeApp } from "firebase/app";
import { 
    getAuth,  
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

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

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    const userDocRef = doc(db, "users", userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()){
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (err) {
            console.log("Error creating user", err.message)
        }
    }
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>  {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}