import { createSelector } from "reselect";

const selectPopupReducer = (state) => state.popup;

export const selectIsPopupOpen = createSelector(
  [selectPopupReducer],
  (popup) => popup.isPopupOpen
);

export const selectPopupAlreadyOpened = createSelector(
  [selectPopupReducer],
  (popup) => popup.popupAlreadyOpened
);
