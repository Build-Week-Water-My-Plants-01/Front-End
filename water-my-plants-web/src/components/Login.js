import React, { useState } from "react";




const Login= props => {


    const initialExistingUser = {
        loginUsername: '',
        loginPassword: ''
    }

    const [ existingUser, setExistingUser] = useState(initialExistingUser);
    const { loginUsername, loginPassword } = existingUser;



    // Handler Functions
    const handleInputChange = (e) => {
        setExistingUser({
            ...existingUser,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <form>
            <div className="form-inputs">
                <label htmlFor="username">Username</label>
                <input type='text'  name='username' onChange={handleInputChange} value={loginUsername} placeholder='Username' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="password">Password</label>
                <input type='password'  name='password' onChange={handleInputChange} value={loginPassword} placeholder='Password' required/>
            </div>

            <button type='submit'>
                Login
            </button>

            <button type='signUp'>
                Sign Up!
            </button>
        </form>
    )
}

export default Login;