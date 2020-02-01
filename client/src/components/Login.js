import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';




const Login =props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const [user, setUser] = useState ('');
  const [password, setPassword] = useState ('');

const useHandler = e => {
    e.preventDefault();
    setUser(e.target.value)
};

const passwordHandler = e => {
    e.preventDefault();
setPassword(e.target.value)
};

const handleSubmit = e => {
    e.preventDefault();
  let credentials = {
    username: user,
    password: password
}

axiosWithAuth()
.post('http://localhost:5000/api/login', credentials)
.then(response => {localStorage.setItem ('token', response.data.payload)
    props.history.push('/bubble-page');
})
.catch(error => console.log('error', error.response
))
    setUser('');
    setPassword('')
}	  
  
  return (
    <>
       <div className='main'>


<h1 className='bounce-in-left'>Bubble App</h1>
<div className= 'login-form'>
      
      <form onSubmit={handleSubmit}>
      <input  className= 'login' type="text" value={user} onChange={useHandler} placeholder="username" />
        <input className= 'login' type="password" value={password} onChange={passwordHandler} placeholder="password" />
        <button className= 'login-btn' >Login</button>
    </form>
    
    </div>
    </div>
    </>
  );
};

export default Login;
