import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import userReducer from "../app/features/user/userSlice";
import moviesReducer from './features/movies/movieSlice';

// store
export default configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer
  },
  
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});