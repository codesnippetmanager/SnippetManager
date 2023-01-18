import * as types from "./actionTypes.js"


export const updateUserPassActionCreator = inputs => {
  return ({
    type: types.UPDATE_FORM,
    payload: inputs,    //object with key username and password
  })
};
