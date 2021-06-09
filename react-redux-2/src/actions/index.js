export const counter = (payload) => (dispatch) => {
  dispatch({ type: "COUNT", payload });
};

export const deCounter = (payload) => (dispatch) => {
  dispatch({ type: "DECOUNT", payload });
};
