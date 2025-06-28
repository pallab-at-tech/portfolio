import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import allofdetailsReducer from "./allOfSlice"
import otherdetailsReducer from "./otherSlice"
import OtherScrollData from "./OtherScrollData"

export const store = configureStore({
   reducer: {
    user : userReducer,
    allofdetails : allofdetailsReducer,
    other : otherdetailsReducer,
    otherscroll : OtherScrollData
   },
})