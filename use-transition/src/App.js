import "./styles.css";
import { useState } from "react";
import NoTransition from "./components/NoTransition";
import Transition from "./components/Transition";

export default function App() {
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const handleToggle = () => {
    setTransitionEnabled(!transitionEnabled);
  };
  return (
    <div className="App">
      <label>Transition Enabled</label>
      <input
        onChange={handleToggle}
        value={transitionEnabled}
        type="checkbox"
      />
      {transitionEnabled ? <Transition /> : <NoTransition />}
    </div>
  );
}
