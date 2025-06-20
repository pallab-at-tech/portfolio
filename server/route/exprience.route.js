import express from 'express'
import { createExperienceDetails, deleteExperienecDetails, getExprienceDetails, upadateExperienceDetails } from '../controller/experience.controller.js'

const experienceRoute = express()

experienceRoute.post("/experience-create",createExperienceDetails)
experienceRoute.get("/experience-get-details",getExprienceDetails)
experienceRoute.put("/experience-update",upadateExperienceDetails)
experienceRoute.delete("/delete-experience",deleteExperienecDetails)

export default experienceRoute