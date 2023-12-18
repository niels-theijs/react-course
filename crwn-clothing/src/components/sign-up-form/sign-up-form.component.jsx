import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const  [ formFields, setFormFields ] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match.")
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (err) {
            if (err.code == "auth/email-already-in-use") {
                alert("Sorry! It seems this email is already in use.");
            } else {
                console.log("Error: Unable to create user.", err);
            }
        }
    }

    const changeHandler = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return (
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={ submitHandler }>
                <label>Name</label>
                <input type="text" required onChange={ changeHandler } name="displayName" value={ displayName } />
                <label>Email</label>
                <input type="email" required onChange={ changeHandler } name="email" value={ email } />
                <label>Password</label>
                <input type="password" required onChange={ changeHandler } name="password" value={ password } />
                <label>Confirm Password</label>
                <input type="password" required onChange={ changeHandler } name="confirmPassword" value={ confirmPassword } />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};

export default SignUpForm;