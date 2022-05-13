import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER,
  CHANGE_MULTIPLIER
} from "../types";

const INITIAL_STATE = {
  counter: 0,
  multiplier: 1
};

export const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 * state.multiplier };
    case DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 * state.multiplier };
    case CHANGE_MULTIPLIER:
      return { ...state, multiplier: action.payload };
    case RESET_COUNTER:
      return { ...state, counter: 0, multiplier: 1 };
    default:
      return state;
  }
};
