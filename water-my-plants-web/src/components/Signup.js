import React, { useState, useEffect } from "react";
import ReactDOM, { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from "../utils/axiosWithAuth";


export default function Login() {
    const { register, handleSubmit, errors } = useForm();
    
    const initialUser = {
      username: '',
      password: '',
      phone_number: '',
    };

    const [ newUser, setNewUser] = useState(initialUser);
    const { username, phone_number, password } = newUser;
    const history = useHistory();

    const onSubmit = (data) => {

      axiosWithAuth()
        .post("auth/register", newUser)
        .then(() => {
            // window.localStorage.clear();
            // window.location.reload();
            // history.push("/login");
            console.log(newUser);
        })
        .catch(err => {
            console.log(err);
        });
        // history.push('/login')
        
    }
    

    // Handler Functions
    const handleInputChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

  
    return (
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              defaultValue={initialUser.username}
              onChange={handleInputChange}
              name="username"
              placeholder="username"
              ref={register({
                validate: value => value.length > 3,
              })}
            />
          </div>
          {errors.username && <p>Username Invalid!</p>}
  
          <div>
            <label htmlFor="password">Password</label>
            <input
              defaultValue={initialUser.password}
              type="password"
              onChange={handleInputChange}
              name="password"
              placeholder="password"
              ref={register({
                validate: value => value.length > 6,
              })}
            />
          </div>
          {errors.password && <p>The password must have a min of 6 characters.</p>}
  
          <div>
            <label htmlFor="phone_number">Phone Number</label>
            <input
              defaultValue={initialUser.phone_number}
              onChange={handleInputChange}
              name="phone_number"
              placeholder="phone_number"
              type="phone_number"
              ref={register}
            />
          </div>
  
          <button type="submit">Submit</button>

          <button type="login">Login</button>
        </form>
      </div>
    );
  }
  


   
    

  