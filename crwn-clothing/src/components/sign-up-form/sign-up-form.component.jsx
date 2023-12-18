import { useState } from "react";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const  [ formFields, setFormFields ] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    console.log(formFields)

    const changeHandler = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return (
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={() => {}}>
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