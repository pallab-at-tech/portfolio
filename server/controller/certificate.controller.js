import allOfModel from "../models/allOf.model.js"
import certificateModel from "../models/certificate.model.js"

export const createCertificateDetails = async (request, response) => {
    try {

        const { tittle, image, describe } = request.body || {}

        if (!tittle || !image || !describe) {
            return response.status(400).json({
                message: 'provide title , image and descibe',
                error: true,
                success: false
            })
        }

        const payload = {
            tittle,
            image,
            describe
        }

        const certificate = new certificateModel(payload)
        const save = await certificate.save()

        const pushId = await allOfModel.findOneAndUpdate(
            {},
            {
                $push: {
                    all_certificate: save._id
                }
            }
        )

        return response.json({
            message: 'certificate data created',
            data : certificate,
            error: false,
            success: true
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const getCertificateDetails = async (request, response) => {
    try {

        const { certificateId } = request.body || {}

        if (!certificateId) {
            return response.status(400).json({
                message: 'please provide certificate Id',
                error: true,
                success: false
            })
        }

        const certificate = await certificateModel.findById(certificateId)

        if (!certificate) {
            return response.status(400).json({
                message: "provide certificate id is'nt available",
                error: true,
                success: false
            })
        }

        return response.json({
            message: 'all of certificate data',
            data: certificate,
            error: false,
            success: true
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const updateCertificateDetails = async (request, response) => {
    try {

        const { certificateId, tittle, image, describe } = request.body || {}

        if (!certificateId) {
            return response.status(400).json({
                message: 'provide certificate Id',
                error: true,
                success: false
            })
        }

        const certificate = await certificateModel.findByIdAndUpdate(certificateId,
            {
                ...(tittle && {tittle : tittle}),
                ...(image && {image : image}),
                ...(describe && {describe : describe})
            }
        )

        if (!certificate) {
            return response.status(400).json({
                message: "provide certificate Id isn't available",
                error: true,
                success: false
            })
        }

        return response.json({
            message: 'certificate data update successfully',
            error: false,
            success: true
        })
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const deleteCertificateDetails = async (request, response) => {
    try {

        const { certificateId } = request.body || {}

        if (!certificateId) {
            return response.status(400).json({
                message: 'please provide certificate Id',
                error: true,
                success: false
            })
        }

        const certificate = await certificateModel.findByIdAndDelete(certificateId)

        if (!certificate) {
            return response.status(400).json({
                message: "provide certificate id is'nt available",
                error: true,
                success: false
            })
        }

        const pullId = await allOfModel.findOneAndUpdate(
            {},
            {
                $pull: {
                    all_certificate: certificateId
                }
            }
        )

        return response.json({
            message: 'delete certificate successfully',
            error: false,
            success: true
        })


    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}