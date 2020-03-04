import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {

    const initialNewUser = {
        username: '',
        phoneNumber: '',
        password: ''
    }

    const [ newUser, setNewUser] = useState(initialNewUser);
    const { username, phonenumber, password } = newUser;
    const history = useHistory();

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

            <button onClick={()=> history.push('/login')}>
                Already member?
            </button>

        </form>
    )
}

export default Signup;