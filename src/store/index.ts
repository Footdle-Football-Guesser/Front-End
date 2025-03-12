import { configureStore } from "@reduxjs/toolkit";
import brasileiraoPlayerReducer from "./brasileiraoPlayer/brasileiraoPlayerSlice";
import appReducer from "./app/appSlice";

export const store = configureStore({
  reducer: {
    brasileiraoPlayerReducer,
    appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
