import { createStore, combineReducers, applyMiddleware } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import thunk from "redux-thunk";
const appState = combineReducers({
  todoReducer: todoReducer
});

export const store = createStore(appState);
