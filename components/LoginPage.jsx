import React, { useState } from 'react';
import {Button, Typography, Box, TextField} from '@mui/material';

import "../styling/login.css";
import { useDispatch, useSelector } from 'react-redux';
import {updateUserPassActionCreator, updateSignInActionCreator, loginActionCreator} from "../redux/actions.js";



const LoginPage =  () => {

  const usernameState = useSelector(state => state.auth.username);
  const passwordState = useSelector(state => state.auth.password);
  const showSignUp = useSelector(state => state.auth.showSignup);
  const dispatch = useDispatch();


  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: usernameState, password: passwordState})
    }).then((res) => res.json())
    .then((data)=>{
      console.log('THIS IS FROM THE RESPONSE', data)
    })
    .catch((err)=>{
      console.log(`there was an error sending LOGIN DATA, error: ${err}`)
    })
  }

  

  const logIn = 
    <div className='login-container'>
        <Typography>Login</Typography>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => dispatch(updateUserPassActionCreator({username: usernameState, password:e.target.value}))}
        />
        <TextField
          id="outlined-username-input"
          label="Username"
          type="username"
          autoComplete="current-username"
          onChange={(e) => dispatch(updateUserPassActionCreator({username: e.target.value, password: passwordState}))}
        />
        <div className='button-container'>
        <Button variant="contained" onClick={handleSubmit}>Login</Button>
        <Button variant="contained" onClick={(e) => dispatch(updateSignInActionCreator({showSignup: true}))}>Sign Up</Button>
        </div>
    </div>



  const signUp = 
    <div className='login-container'>
        <Typography>Sign Up</Typography>
        <TextField
          id="outlined-username-input"
          label="Username"
          type="username"
          autoComplete="current-username"
          onChange={(e) => dispatch(updateUserPassActionCreator({username:e.target.value}))}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => dispatch(updateUserPassActionCreator({password:e.target.value}))}
        />
        <TextField
          id="outlined-password-input"
          label="Repeat Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => dispatch(updateUserPassActionCreator({password:e.target.value}))}
        />
        <div className='button-container'>
        <Button variant="contained">Sign Up</Button>
        </div>
      </div>

  const renderView = (showSignUp) ? signUp : logIn

  return (
      <>
        {renderView}
      </>
  )

};


export default LoginPage;