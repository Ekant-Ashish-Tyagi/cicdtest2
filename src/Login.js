import React, { useState } from 'react'
import { Alert } from './Alert';
import { Button } from './Button';

export const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleSubmit = () => {
    setLoggedIn(true);
  }

  if (loggedIn) return <Alert />;

  return (<>
      <div className='mb-3'>
        <label htmlFor='inputEmail' className='form-label'>Email address</label>
        <input type='email' className='form-control' id='inputEmail' aria-describedby='emailHelp' />
      </div>
      <div className='mb-3'>
        <label htmlFor='inputPassword' className='form-label'>Password</label>
        <input type='password' className='form-control' id='inputPassword' />
      </div>
      <div className='mb-3 form-check'>
        <input type='checkbox' className='form-check-input' id='rememberMe' />
        <label className='form-check-label' htmlFor='rememberMe'>Remember Me</label>
      </div>
      <Button type='button' id='submit' className='btn btn-primary' onClick={handleSubmit}>Submit</Button>
  </>);
}

export default Login;