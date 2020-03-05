import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  const initialUser = {
    username: '',
    password: '',
    phonenumber: '',
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            defaultValue={initialUser.username}
            name="username"
            placeholder="username"
            ref={register({
              validate: value => value.length > 6,
            })}
          />
        </div>
        {errors.username && <p>Username Invalid!</p>}

        <div>
          <label htmlFor="password">Password</label>
          <input
            defaultValue={initialUser.password}
            name="password"
            placeholder="password"
            ref={register({
              validate: value => value.length > 6,
            })}
          />
        </div>
        {errors.password && <p>The password must have a min of 6 characters.</p>}

        <div>
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            defaultValue={initialUser.phonenumber}
            name="phonenumber"
            placeholder="phonenumber"
            type="phonenumber"
            ref={register}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}