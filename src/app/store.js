import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/imagesApiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
setupListeners(store.dispatch);
