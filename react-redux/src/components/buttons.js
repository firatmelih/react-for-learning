import React from "react";
import { useDispatch } from "react-redux";
import { arttir, azalt, reset } from "../store/actions/counter";

const Buttons = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(arttir());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(azalt());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
    </div>
  );
};
export default Buttons;
