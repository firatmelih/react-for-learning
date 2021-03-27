import React, { useState } from "react";

const Counter = () => {
  var [counter, setCounter] = useState(0);
  var [tens, setTens] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(counter - counter);
    setTens(tens - tens);
  };
  const changeSymbol = () => {
    setCounter(counter - 2 * counter);
    setTens(tens - 2 * tens);
  };

  if (counter == 10) {
    setCounter(counter - counter);
    setTens(tens + 1);
  }
  if (counter == -10) {
    setCounter(counter - counter);
    setTens(tens - 1);
  }
  if (tens == 10 || tens == -10) {
    setTens(tens - tens);
    setCounter(counter - counter);
  }

  return (
    <div className="main">
      <div className="digits">
        <h1>{tens}</h1>
        <h1>{counter}</h1>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            increase();
          }}
        >
          {" "}
          Increase Value{" "}
        </button>
        <button
          onClick={() => {
            decrease();
          }}
        >
          {" "}
          Decrease Value{" "}
        </button>
        <button
          onClick={() => {
            changeSymbol();
          }}
        >
          {" "}
          Change Symbol{" "}
        </button>
        <button
          onClick={() => {
            reset();
          }}
        >
          {" "}
          Reset{" "}
        </button>
      </div>
    </div>
  );
};

export default Counter;
