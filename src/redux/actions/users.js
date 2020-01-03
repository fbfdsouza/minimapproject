import { FETCH_USERS, SELECTED_USER } from "../../constants";

export function fetchUsers() {
  return {
    type: FETCH_USERS
  };
}

export function selectUser(user) {
  return {
    type: SELECTED_USER,
    payload: user
  };
}
