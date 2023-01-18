import axios from 'axios';
import * as types from "./actionTypes.js"


export const updateUserPassActionCreator = inputs => {
  return ({
    type: types.UPDATE_FORM,
    payload: inputs,    //object with key username and password and signup
  })
};

export const updateSignInActionCreator = inputs => {
  return ({
    type: types.SHOW_SIGNUP,
    payload: inputs 
  })
}

export const updateSnippetListActionCreator = inputs => {
  return ({
    type: types.ADD_SNIPPET,
    payload: inputs // snippet : "CODE"
  })
}


export const loginActionCreator = (username, password) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    axios.post('https://localhost:3000/login', { username, password })
      .then(response => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'LOGIN_FAILURE', payload: error });
      });
  }
}