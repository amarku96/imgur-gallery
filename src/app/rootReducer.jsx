import { combineReducers } from "redux";
import gallerySliceReducer from "../api/gallerySlice";
import { apiSlice } from "../api/imagesApiSlice";
import imagesReducer from "../features/imagesList/ImagesSlice";

const rootReducer = combineReducers({
  apiSlice: apiSlice.reducer,
  gallery: gallerySliceReducer,
  images: imagesReducer,
});

export default rootReducer;
