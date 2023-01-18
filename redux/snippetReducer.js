import * as types from "./actionTypes.js"


const initialState = {
  snippets : ["CODES","MORE CODE"]
  
}

const snippetReducer = (state = initialState, action) => {
  switch (action.type) {
      case types.ADD_SNIPPET:
        return {
          ...state,
          snippets: [...state.snippets, action.payload.item]
        }
      default:
          return state;
  }
};

export default snippetReducer;


