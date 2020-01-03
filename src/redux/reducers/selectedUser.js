import { SELECTED_USER } from "../../constants";

const initialState = { selectedUser: undefined };

const selectedUser = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_USER:
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
};

export default selectedUser;
