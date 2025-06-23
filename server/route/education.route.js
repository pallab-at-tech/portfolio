import express from 'express'
import auth from '../middleware/auth.js'
import { createEducationDetails, deleteEducationalDetails, getEducationDetails, updateEducationalDetails } from '../controller/education.controller.js'

const educationRoute = express()

educationRoute.post("/education-create",auth,createEducationDetails)
educationRoute.get("/get-education-data",getEducationDetails)
educationRoute.put("/update-education-data",auth,updateEducationalDetails)
educationRoute.delete("/delete-education-data",auth,deleteEducationalDetails)

export default educationRoute