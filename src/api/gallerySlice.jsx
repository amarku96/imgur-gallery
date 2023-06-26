import { createSlice } from "@reduxjs/toolkit";
import { useFetchImagesQuery } from "./imagesApiSlice";

const initialState = {
  loading: false,
  items: [],
  filters: {
    section: "hot",
    sort: "rising",
    page: 1,
    visible: 20,
    window: "day",
    showViral: true,
    albumPreviews: false,
    showMature: false,
  },
};

const setLoader = (state) => {
  state.loading = true;
};

const setGalleryRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const setGalleryFulfilled = (state, action) => {
  state.items = action.payload.data.data;
  state.loading = false;
};

export const gallerySliceReducer = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
  extraReducers: {
    [useFetchImagesQuery.pending]: setLoader,
    [useFetchImagesQuery.fulfilled]: setGalleryFulfilled,
    [useFetchImagesQuery.rejected]: setGalleryRejected,
  },
});

export const galleryActions = gallerySliceReducer.actions;

export default gallerySliceReducer.reducer;
