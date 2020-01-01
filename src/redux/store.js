import { createStore, applyMiddleware } from "redux";
import users from "./reducers/users";
import createSagaMiddleware from "redux-saga";
import { watchFetchingUsers } from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(users, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchingUsers);

export default store;
