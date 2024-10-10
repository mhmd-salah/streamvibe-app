import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./Slices/sidebarSlice";
import { persistReducer } from "redux-persist";
import persistConfig from "./persistConfig";


const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

const persistedReducer = persistReducer(persistConfig,rootReducer);
 
export default persistedReducer;