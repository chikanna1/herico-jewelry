import { POPUP_ACTION_TYPES } from "./popup.types";

export const POPUP_INITIAL_STATE = {
  isPopupOpen: false,
  popupAlreadyOpened: false,
};

export const popupReducer = (state = POPUP_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case POPUP_ACTION_TYPES.SET_IS_POPUP_OPEN:
      return {
        ...state,
        isPopupOpen: payload,
      };

    default:
      return state;
  }
};
