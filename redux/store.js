import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer.js";
import reducers from "./combinedReducers.js";

export default configureStore({
  reducer : reducers
});