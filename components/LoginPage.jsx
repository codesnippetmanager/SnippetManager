import React, { useState } from 'react';
import {
  Button, Typography, Box, TextField,
} from '@mui/material';

import '../styling/login.css';
import { useDispatch, useSelector } from 'react-redux';
import {updateUserPassActionCreator, updateSignInActionCreator, loginActionCreator} from "../redux/actions.js";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router';



const LoginPage =  () => {

  const usernameState = useSelector(state => state.auth.username);
  const passwordState = useSelector(state => state.auth.password);
  const showSignUp = useSelector(state => state.auth.showSignup);
  const [confirmPassword,setConfirmPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: usernameState, password: passwordState }),
    }).then((res) => res.json())
      .then((data) => {
        console.log('THIS IS FROM THE RESPONSE', data);
      })
      .catch((err) => {
        console.log(`there was an error sending LOGIN DATA, error: ${err}`);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: usernameState, password: passwordState})
    }).then(res => {
       if (res.status == 200) {
        navigate("/home")
        }})
    .then((data)=>{
      console.log('THIS IS FROM THE RESPONSE', data)
    })
    .catch((err)=>{
      console.log(`there was an error sending LOGIN DATA, error: ${err}`)
    })
  }

  function handleSignup(e) {
    e.preventDefault();
    fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: usernameState, password: passwordState})
    }).then(res => {
       if (res.status == 200) {
        navigate("/home")
        }})
    .then((data)=>{
      console.log('THIS IS FROM THE RESPONSE', data)
    })
    .catch((err)=>{
      console.log(`there was an error sending SIGN UP DATA, error: ${err}`)
    })
  }

  

  const logIn = 
    <div className='login-container'>
        <div className='input-container'>
        <Typography>Login</Typography>
        <TextField
          id="outlined-username-input"
          label="Username"
          type="username"
          autoComplete="current-username"
          onChange={(e) => dispatch(updateUserPassActionCreator({username: e.target.value, password: passwordState}))}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => dispatch(updateUserPassActionCreator({username: usernameState, password:e.target.value}))}
        />
        </div>
        <div className='button-container'>
        <Button variant="contained" onClick={handleSubmit}>Login</Button>
        <Button variant="contained" onClick={(e) => dispatch(updateSignInActionCreator({showSignup: true}))}>Sign Up</Button>
        </div>
    </div>



  const signUp = 
    <div className='login-container'>
      <div className='input-container'>
        <Typography>Sign Up</Typography>
        <TextField
          id="outlined-username-input"
          label="Username"
          type="username"
          autoComplete="current-username"
          onChange={(e) => dispatch(updateUserPassActionCreator({username: e.target.value, password: passwordState}))}
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => dispatch(updateUserPassActionCreator({username: usernameState, password:e.target.value}))}
        />
        <TextField
          id="outlined-password-input"
          label="Repeat Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => dispatch(updateUserPassActionCreator({username: usernameState, password:e.target.value}))}
        />
        </div>
        <div className='button-container'>
        <Button variant="contained" onClick={handleSignup}>Sign Up</Button>
        </div>
      </div>


  const renderView = (showSignUp) ? signUp : logIn;



  return (
    <>
      {renderView}
    </>
  );
}

export default LoginPage;
