import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    projectList : [],
    name : "",
    email : "",
    resume : "",
    contact_number : "",
    about_me : "",
    github_link : "",
    linkedin_link : "",
    instragram_link : "",
    facebook_link : "",
    all_experience : [],
    all_achievement : [],
    all_certificate : [],
    all_education : []

}

const allOfSlice = createSlice({
    name : "allofdetails",
    initialState : initialValue,
    reducers : {
        setAllOfDetails : (state , action) =>{
            state.projectList = action.payload?.projectList
            state.name =  action.payload?.name
            state.email = action.payload?.email
            state.resume = action.payload?.resume
            state.contact_number = action.payload?.contact_number
            state.about_me = action.payload?.about_me
            state.github_link = action.payload?.github_link
            state.linkedin_link = action.payload?.linkedin_link
            state.instragram_link = action.payload?.instragram_link
            state.facebook_link = action.payload?.facebook_link
            state.all_experience = action.payload?.all_experience
            state.all_achievement = action.payload?.all_achievement
            state.all_certificate = action.payload?.all_certificate
            state.all_education = action.payload?.all_education
        }
    }
})

export const {setAllOfDetails} = allOfSlice.actions
export default allOfSlice.reducer