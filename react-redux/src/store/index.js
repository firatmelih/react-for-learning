import { createStore, combineReducers } from "redux";
import CounterReducer from "./reducers/counter";
const reducers = combineReducers({
  reducer: CounterReducer
});

const store = createStore(reducers);

export default store;
