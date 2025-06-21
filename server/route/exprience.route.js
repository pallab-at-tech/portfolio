import express from 'express'
import { createExperienceDetails, deleteExperienecDetails, getExprienceDetails, upadateExperienceDetails } from '../controller/experience.controller.js'
import auth from '../middleware/auth.js'

const experienceRoute = express()

experienceRoute.post("/experience-create",auth, createExperienceDetails)
experienceRoute.get("/experience-get-details",getExprienceDetails)
experienceRoute.put("/experience-update",auth, upadateExperienceDetails)
experienceRoute.delete("/delete-experience",auth, deleteExperienecDetails)

export default experienceRoute