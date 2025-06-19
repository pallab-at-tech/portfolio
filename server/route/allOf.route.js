import express from "express";
import { createAllOfDetails, getAllOfDetails, updateAllOfDetails } from "../controller/allOf.controller.js";

const allOfRoute = express()

allOfRoute.post("/data-create",createAllOfDetails)
allOfRoute.get("/get-data",getAllOfDetails)
allOfRoute.post("/update-data",updateAllOfDetails)

export default allOfRoute