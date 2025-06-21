import express from 'express'
import { createCertificateDetails, deleteCertificateDetails, getCertificateDetails, updateCertificateDetails } from '../controller/certificate.controller.js'
import auth from '../middleware/auth.js'

const certificateRoute = express()

certificateRoute.post("/certificate-create",auth, createCertificateDetails)
certificateRoute.get("/get-certificate",getCertificateDetails)
certificateRoute.put("/update-certificate-details",auth,updateCertificateDetails)
certificateRoute.delete("/delete-certificate-details",auth,deleteCertificateDetails)


export default certificateRoute