import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SidebarState {
  isSidebarOpen: boolean;
}

const initialState:SidebarState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
  extraReducers: () => {},
});

export default  sidebarSlice.reducer;
export const {openSidebar,closeSidebar} = sidebarSlice.actions;
export const selectorSidebar = (state:RootState) => state.reducer.sidebar;
