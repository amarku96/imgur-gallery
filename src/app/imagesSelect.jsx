import { createSelector } from "@reduxjs/toolkit";

export const selectGalleryState = createSelector(
  (state) => state,
  (state) => state.gallery
);

export const selectGalleryStateById = (id) => {
  return createSelector(
    (state) => state,
    (state) => state.gallery.items.filter((item) => item.id === id)[0]
  );
};
