import React, { useState } from "react";

const Signup = props => {

    const initialNewUser = {
        username: '',
        phoneNumber: '',
        password: ''
    }

    const [ newUser, setNewUser] = useState(initialNewUser);
    const { username, phonenumber, password } = newUser;

    // Handler Functions
    const handleInputChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }


    return (
        <form>
            <div className="form-inputs">
                <input type='text' name='username' onChange={handleInputChange} value={username} placeholder='Username' required/>
            </div>

            <div className="form-inputs">
                <input type='phonenumber'  name='phoneNumber' onChange={handleInputChange} value={phonenumber} placeholder='Phone Number' required/>
            </div>

            <div className="form-inputs">
                <input type='password' name='password' onChange={handleInputChange} value={password} placeholder='Password' required/>
            </div>

            <button type='submit'>
                Register
            </button>

            <button type='submit'>
                Already member?
            </button>

        </form>
    )
}

export default Signup;