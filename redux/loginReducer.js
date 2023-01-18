import * as types from "./actionTypes.js"


const initialState = {
  username: "",
  password: "",
  showSignup: false
};


const loginReducer = (state = initialState, action) => {
  switch (action.type) {
      case types.UPDATE_FORM:
        return {
          ...state,
          username: action.payload.username,
          password: action.payload.password
        }
      case types.SHOW_SIGNUP:
        return {
          ...state,
          showSignup: action.payload.showSignup
        }
      default:
          return state;
  }
};

export default loginReducer;

