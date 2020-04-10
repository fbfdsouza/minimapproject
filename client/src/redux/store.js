import { createStore, applyMiddleware, combineReducers } from "redux";
import users from "./reducers/users";
import selectedUser from "./reducers/selectedUser";
import createSagaMiddleware from "redux-saga";
import { watchFetchingUsers } from "../sagas/saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ fetchedUsers: users, selectedUser }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchFetchingUsers);

export default store;
