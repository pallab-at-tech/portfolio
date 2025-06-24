import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    data : [],
    totalCount : 0,
    totalNoOfPage : 0
}

const otherSlice = createSlice({
    name : 'other',
    initialState : initialValue,
    reducers : {
        OthersDetails : (state,action) =>{
            state.data = [...action.payload?.data]
            state.totalCount = action.payload?.totalCount || 0
            state.totalNoOfPage = action.payload?.totalNoOfPage || 0
        }
    }
})

export const {OthersDetails} = otherSlice.actions
export default otherSlice.reducer