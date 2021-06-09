const INITIAL_STATE = {
  counter: 0
};

const counter = (state = INITIAL_STATE, action) => {
  // console.log(state);
  switch (action.type) {
    case "COUNT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECOUNT":
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
};

export default counter;
