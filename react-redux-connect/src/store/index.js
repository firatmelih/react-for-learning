import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";

const appState = combineReducers({
  counterState: counterReducer
});

export const store = createStore(appState);
