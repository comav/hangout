import { UPDATE_USER_DATA } from "./constants";

const initialState = {
  data: {}
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA: 
      return {
        ...state, data: action.payload
      }
    default: 
      return state;
  }
}

export default userDataReducer;