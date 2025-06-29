import express from 'express'
import auth from '../middleware/auth.js'
import { createEducationDetails, deleteEducationalDetails, getEducationDetails, updateEducationalDetails } from '../controller/education.controller.js'
import { admin } from '../middleware/admin.js'

const educationRoute = express()

educationRoute.post("/education-create",auth,admin, createEducationDetails)
educationRoute.get("/get-education-data",getEducationDetails)
educationRoute.put("/update-education-data",auth,admin, updateEducationalDetails)
educationRoute.delete("/delete-education-data",auth,admin, deleteEducationalDetails)

export default educationRoute