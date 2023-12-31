import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

const SignIn = () => {
    const logGoogleUserPopUp = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUserPopUp}>Sign In With Google Pop Up</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn