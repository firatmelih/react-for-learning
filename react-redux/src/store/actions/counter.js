import { SAYAC_ARTTIR, SAYAC_AZALT, SAYAC_RESET } from "../types";

export const arttir = () => {
  return {
    type: SAYAC_ARTTIR
  };
};

export const azalt = () => {
  return {
    type: SAYAC_AZALT
  };
};

export const reset = () => {
  return {
    type: SAYAC_RESET
  };
};
