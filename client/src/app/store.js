import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/Counter/counterSlice";
import { apiSlice } from "../services/API/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
