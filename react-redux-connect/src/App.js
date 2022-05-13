import "./styles.css";
import { connect } from "react-redux";
import {
  increase,
  decrease,
  reset,
  changeMultiplier
} from "./store/actions/counterActions";
import { useEffect } from "react";
const Component = ({
  counter,
  increase,
  reset,
  decrease,
  changeMultiplier,
  multiplier
}) => {
  useEffect(() => {
    console.log(counter);
  }, [counter]);
  return (
    <div className="App">
      <h1>Basic React Redux with Connect</h1>
      <label>multiplier</label>
      <br />
      <input
        onChange={(e) => changeMultiplier(e.target.value)}
        value={multiplier}
        type="number"
      />
      <br />
      <br />
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
      <h2>{counter}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { counter, multiplier } = state.counterState;
  return { counter, multiplier };
};

const mapDispatch = {
  increase,
  decrease,
  reset,
  changeMultiplier
};

export const App = connect(mapStateToProps, mapDispatch, null, {
  forwardRef: true
})(Component);
