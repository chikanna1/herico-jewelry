import { createAction } from "../../utils/reducer.utils";
import { POPUP_ACTION_TYPES } from "./popup.types";

export const setIsPopupOpen = (boolean) =>
  createAction(POPUP_ACTION_TYPES.SET_IS_POPUP_OPEN, boolean);

export const setPopupAlreadyOpened = (boolean) =>
  createAction(POPUP_ACTION_TYPES.SET_POPUP_ALREADY_OPENED, boolean);
