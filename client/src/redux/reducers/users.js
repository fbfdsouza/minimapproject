import { FETCH_USERS, FETCH_USERS_SUCCESS } from "../../constants";

const initialState = { users: [], isFetching: false };

const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, isFetching: true };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default users;
