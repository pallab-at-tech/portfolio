import express from 'express'
import { createExperienceDetails, deleteExperienecDetails, getExprienceDetails, upadateExperienceDetails } from '../controller/experience.controller.js'
import auth from '../middleware/auth.js'
import { admin } from '../middleware/admin.js'

const experienceRoute = express()

experienceRoute.post("/experience-create",auth,admin, createExperienceDetails)
experienceRoute.get("/experience-get-details",getExprienceDetails)
experienceRoute.put("/experience-update",auth,admin, upadateExperienceDetails)
experienceRoute.delete("/delete-experience",auth, admin, deleteExperienecDetails)

export default experienceRoute