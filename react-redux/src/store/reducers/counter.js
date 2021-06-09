import { SAYAC_ARTTIR, SAYAC_AZALT, SAYAC_RESET } from "../types";

const default_state = {
  sayac: 0,
  isim: "melih"
};

const reducer = (state = default_state.sayac, action) => {
  switch (action.type) {
    case SAYAC_ARTTIR:
      return (state += 1);
    case SAYAC_AZALT:
      return state - 1;
    case SAYAC_RESET:
      return (state = 0);
    default:
      return state;
  }
};

export default reducer;
