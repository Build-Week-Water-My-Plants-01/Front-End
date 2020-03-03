import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = () => {

    const initialExistingUser = {
        username: '',
        password: ''
    }

    const [ existingUser, setExistingUser] = useState(initialExistingUser);
    const { loginUsername, loginPassword } = existingUser;
    const [isSubmitting, setSubmitting] = useState(false);

    const history = useHistory();


    useEffect(() => {
        if(isSubmitting) {
            axiosWithAuth()
                .post(`/api/auth/login`, existingUser)
                .then(res => {
                    console.log('this is res', res)
                    window.localStorage.setItem('token', res.data.token);
                    window.localStorage.setItem('userID', res.data.id);
                    setSubmitting(false);
                    history.push('/dashboard');
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [isSubmitting])

    // Handler Functions
    const handleInputChange = (e) => {
        setExistingUser({
            ...existingUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true)
    }
    
    return (
        <form onSubmit={handleSubmit}>
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

            <button onClick={()=>{history.push('/signup')}}>
                Sign Up!
            </button>
        </form>
    )
}

export default Login;