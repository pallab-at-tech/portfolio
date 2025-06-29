import express from 'express'
import { createProjectDetails, deleteProjectDetails, getProjectDetails, updateProjectDetails } from '../controller/projects.controller.js'
import auth from '../middleware/auth.js'
import { admin } from '../middleware/admin.js'

const projectRoute = express()

projectRoute.post("/project-create", auth, admin, createProjectDetails)
projectRoute.get("/get-project-details" , getProjectDetails)
projectRoute.put("/update-project-details", auth, admin, updateProjectDetails)
projectRoute.delete("/delete-project",auth,admin, deleteProjectDetails)

export default projectRoute