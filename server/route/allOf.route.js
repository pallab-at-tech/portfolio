import express from "express";
import { createAllOfDetails, getAllOfDetails, updateAllOfDetails } from "../controller/allOf.controller.js";
import auth from "../middleware/auth.js";
import { admin } from "../middleware/admin.js";

const allOfRoute = express()

allOfRoute.post("/data-create",auth,admin, createAllOfDetails)
allOfRoute.get("/get-data",getAllOfDetails)
allOfRoute.put("/update-data",auth, admin, updateAllOfDetails)

export default allOfRoute