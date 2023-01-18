import * as types from "./actionTypes.js"


const initialState = {
  username: "",
  password: ""
};


const loginReducer = (state = initialState, action) => {
  switch (action.type) {
      case types.UPDATE_FORM:
        return {
          ...state,
          username: action.payload.username,
          password: action.payload.password
        }

      default:
          return state;
  }
};

export default loginReducer;

