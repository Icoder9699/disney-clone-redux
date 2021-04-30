import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import userReducer from "../app/features/user/userSlice";
import moviesReducer from './features/movies/movieSlice';
import bySearchReducer from './features/movies/bySearchSlice';

// store
export default configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    bySearch: bySearchReducer
  },
  
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});