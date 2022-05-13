import { SET_TODO } from "../types";
import axios from "axios";

export const setTodo = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch({ type: SET_TODO, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};
