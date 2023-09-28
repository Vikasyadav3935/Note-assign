
import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./slices/noteSlice";

 export const store = configureStore({
    reducer: {
      notes: noteReducer,
    },
  });