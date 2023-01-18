import { combineReducers } from 'redux';

import loginReducer from './loginReducer.js';
import snippetReducer from './snippetReducer.js';


// combine reducers
const reducers = combineReducers({
  auth: loginReducer,
  snippet: snippetReducer
});

// make the combined reducers available for import
export default reducers;