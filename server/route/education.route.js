import express from 'express'
import auth from '../middleware/auth.js'
import { createEducationDetails, deleteEducationalDetails, getEducationDetails, updateEducationalDetails } from '../controller/education.controller.js'

const educationRoute = express()

educationRoute.post("/education-create",auth,createEducationDetails)
educationRoute.get("/get-education-data",getEducationDetails)
educationRoute.put("/update-education-data",updateEducationalDetails)
educationRoute.delete("/delete-education-data",deleteEducationalDetails)

export default educationRoute