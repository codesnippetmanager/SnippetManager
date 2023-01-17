import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer.js";

export default configureStore({
  reducer: {
    auth: loginReducer,
  }
});