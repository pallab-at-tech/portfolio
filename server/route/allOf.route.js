import express from "express";
import { createAllOfDetails } from "../controller/allOf.controller.js";

const allOfRoute = express()

allOfRoute.get("/getData",createAllOfDetails)

export default allOfRoute