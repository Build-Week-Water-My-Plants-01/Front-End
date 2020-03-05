import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { userData } from '../actions/index';
import { connect } from 'react-redux';

const Login = (props) => {

    const initialExistingUser = {
        username: '',
        password: ''
    }

    const [ existingUser, setExistingUser] = useState(initialExistingUser);
    const { loginUsername, loginPassword } = existingUser;

    const history = useHistory();
    // Handler Functions
    const handleInputChange = (e) => {
        setExistingUser({
            ...existingUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post(`auth/login`, existingUser)
            .then(res => {
                props.userData(existingUser);
                // console.log('this is res', res)
                window.localStorage.setItem('token', res.data.token);
                window.localStorage.setItem('userID', res.data.id);
                history.push('/dashboard'); 
            })
            .catch(err => {
                console.log("there was an error in the Login", err);
            })
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

const mapStateToProps = state => {
    return {
        isEditing: state.isEditing,
        fetchingErrors: state.fetchingErrors,
        plants: state.plants
    }
}

export default connect(
    mapStateToProps,
    {   
        userData 
    }
    )(Login);