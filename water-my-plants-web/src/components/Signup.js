import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
    const history = useHistory();
    const onSubmit = ( data ) => {
      axiosWithAuth()
        .post("auth/register", newUser)
        .then(() => {
            history.push("/login");
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
      <div className="form-cont">
        <form className="sign-in" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              defaultValue={initialUser.username}
              onChange={handleInputChange}
              name="username"
              placeholder="Username"
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
              placeholder="Password"
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
              placeholder="Phone Number"
              type="phone_number"
              ref={register}
            />
          </div>
          <button className='btn btn-delete' type="submit">Submit</button>
          <h1>Or</h1>
          <button className='btn btn-edit' type="login" onClick={()=>{history.push('/')}}>Login</button>
        </form>
      </div>
    );
  }
   
    

  