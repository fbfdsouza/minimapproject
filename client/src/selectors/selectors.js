import { createSelector } from "reselect";

export const usersSelector = state => state.fetchedUsers.users;

export const selectedUserNameSelector = state =>
  state.selectedUser.selectedUser;

export const namesSelector = createSelector(usersSelector, users =>
  users.map(user => user.name)
);

export const getSelectedUserPositionSelector = createSelector(
  usersSelector,
  selectedUserNameSelector,
  (users, selectedUser) => {
    if (users.length > 0 && selectedUser) {
      return [
        users.find(item => item.name === selectedUser).address.geo.lat,
        users.find(item => item.name === selectedUser).address.geo.lng
      ];
    }
  }
);
