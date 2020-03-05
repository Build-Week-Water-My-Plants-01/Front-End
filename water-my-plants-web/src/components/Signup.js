import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Signup = () => {

    const initialNewUser = {
        username: '',
        phone_number: '',
        password: ''
    }

    const [ newUser, setNewUser] = useState(initialNewUser);
    const { username, phone_number, password } = newUser;
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

      axiosWithAuth()
        .post("auth/register", newUser)
        .then(() => {
            window.localStorage.clear();
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        });
        history.push('/login')
    }
    
    // Handler Functions
    const handleInputChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-inputs">
                <input type='text' name='username' onChange={handleInputChange} value={username} placeholder='Username' required/>
            </div>

            <div className="form-inputs">
                <input type='phone_number'  name='phone_number' onChange={handleInputChange} value={phone_number} placeholder='Phone Number' required/>
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