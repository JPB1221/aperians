import { homeConstants } from "../constants";
const { MUTE } = homeConstants;
const initialState = {
  mute: true,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case MUTE:
      return {
        ...state,
        mute: action.payload,
      };
    default:
      return state;
  }
};
