import express from "express";
import { createAllOfDetails, getAllOfDetails, updateAllOfDetails } from "../controller/allOf.controller.js";
import auth from "../middleware/auth.js";

const allOfRoute = express()

allOfRoute.post("/data-create",auth, createAllOfDetails)
allOfRoute.get("/get-data",getAllOfDetails)
allOfRoute.post("/update-data",auth, updateAllOfDetails)

export default allOfRoute