import express from 'express'
import { createCertificateDetails, deleteCertificateDetails, getCertificateDetails, updateCertificateDetails } from '../controller/certificate.controller.js'
import auth from '../middleware/auth.js'
import { admin } from '../middleware/admin.js'

const certificateRoute = express()

certificateRoute.post("/certificate-create",auth,admin, createCertificateDetails)
certificateRoute.post("/get-certificate",getCertificateDetails)
certificateRoute.put("/update-certificate-details",auth, admin,updateCertificateDetails)
certificateRoute.delete("/delete-certificate-details",auth,admin,deleteCertificateDetails)


export default certificateRoute