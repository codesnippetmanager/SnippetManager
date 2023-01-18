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

