import "./styles.css";
import { counter, deCounter } from "./actions";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.counter.counter);
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(counter());
        }}
      >
        arttır
      </button>
      <button
        onClick={() => {
          dispatch(deCounter());
        }}
      >
        azalt
      </button>
      <h2>{state.counter.counter}</h2>
    </div>
  );
}
