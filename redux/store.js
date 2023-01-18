import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer.js";
import reducers from "./combinedReducers.js";
import thunk from "redux-thunk" 
import { applyMiddleware } from "redux";

export default configureStore({
  reducer : reducers
}, applyMiddleware(thunk));
