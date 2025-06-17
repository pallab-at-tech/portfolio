import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    _id: "",
    name: "",
    email: "",
    avatar : "",
    verify_email: false,
    admin_verify: false,
}

const userSlice = createSlice({
    name : 'user',
    initialState : initialValue,
    reducers : {
        setUserDetails : (state, action) =>{
            state._id = action.payload?._id
            state.name = action.payload?.name
            state.email = action.payload?.email
            state.avatar = action.payload?.avatar
            state.verify_email = action.payload?.verify_email
            state.admin_verify = action.payload?.admin_verify
        }
    }
})

export const {setUserDetails} = userSlice.actions

export default userSlice.reducer