import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import allofdetailsReducer from "./allOfSlice"

export const store = configureStore({
   reducer: {
    user : userReducer,
    allofdetails : allofdetailsReducer
   },
})