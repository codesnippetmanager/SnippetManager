import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styling/login.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserPassActionCreator } from '../redux/actions.js';

function LoginPage() {
  const usernameState = useSelector((state) => state.auth.username);
  const passwordState = useSelector((state) => state.auth.password);
  const dispatch = useDispatch();

  return (
    <div>
      {console.log(usernameState, passwordState)}
      <div className="login-container">

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => dispatch(updateUserPassActionCreator({ password: e.target.value }))}
        />

        <TextField
          id="outlined-username-input"
          label="Username"
          type="username"
          autoComplete="current-username"
          onChange={(e) => dispatch(updateUserPassActionCreator({ password: e.target.value }))}
        />
        <div className="button-container">
          <Button variant="contained">Login</Button>
          <Button variant="contained">Sign Up</Button>
        </div>
      </div>
    </div>

  );
}

export default LoginPage;
