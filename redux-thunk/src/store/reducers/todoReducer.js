import { SET_TODO } from "../types";

const INITIAL_STATE = {
  todos: []
};

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TODO:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
