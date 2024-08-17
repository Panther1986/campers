import { configureStore } from "@reduxjs/toolkit";
import { campersReduser } from "./operations/slice.js";
// import storage from 'redux-persist/lib/storage"';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    camps: campersReduser,
  },
});
