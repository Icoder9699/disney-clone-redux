import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import userReducer from "../app/features/user/userSlice";


// store
export default configureStore({
  reducer: {
    user: userReducer,
  },
  
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});