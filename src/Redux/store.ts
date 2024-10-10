import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./rootReducer";


const store = configureStore({
  reducer: {
    // Add your reducers here
    reducer: persistedReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
