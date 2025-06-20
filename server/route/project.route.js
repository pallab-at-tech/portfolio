import express from 'express'
import { createProjectDetails, deleteProjectDetails, getProjectDetails, updateProjectDetails } from '../controller/projects.controller.js'
import auth from '../middleware/auth.js'

const projectRoute = express()

projectRoute.post("/project-create", auth, createProjectDetails)
projectRoute.get("/get-project-details" , getProjectDetails)
projectRoute.put("/update-project-details", auth, updateProjectDetails)
projectRoute.delete("/delete-project",auth,deleteProjectDetails)

export default projectRoute