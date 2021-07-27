import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import user from "./user";
import movies from "./movies";

const store = configureStore({
  reducer: {
    user,
    movies,
  },

  devTools: process.env.REACT_APP_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
