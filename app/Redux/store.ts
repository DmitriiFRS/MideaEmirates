import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from './Slice/SidebarSlice';
import MainpageReducer from './Slice/MainpageSlice';
import InnovationReducer from './Slice/InnovationsSlice'

const store = configureStore({
   reducer: {
      SidebarReducer,
      MainpageReducer,
      InnovationReducer
   }
})
export default store;
export type RootState = ReturnType<typeof store.getState>