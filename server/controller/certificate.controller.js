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

        return response.json({
            message: 'certificate data created',
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

export const getCertificateDetails = async (request, response) => {
    try {

        let { page, limit, search, certificateId } = request.body || {}


        if (certificateId) {
            const oneData = await certificateModel.findById(certificateId)

            if (!oneData) {
                return response.status(400).json({
                    message: "given id is not exist",
                    error: true,
                    success: false
                })
            }

            return response.json({
                message: 'Data of certificate',
                error: false,
                success: true,
                data: oneData
            })
        }



        page = Number(page) || 1
        limit = Number(limit) || 1

        if (!page) {
            page = 1;
        }

        if (!limit) {
            limit = 1;
        }


        const query = search ? {
            $text: {
                $search: search
            }
        } : {}


        const skip = (page - 1) * limit


        const [data, dataCount] = await Promise.all([
            certificateModel.find(query).sort({ createdAt: 1 }).skip(skip).limit(limit),
            certificateModel.countDocuments(query)
        ])



        return response.json({
            message: 'Data of certificate',
            error: false,
            success: true,
            totalCount: dataCount,
            totalNoOfPage: Math.ceil(dataCount / limit),
            data: data
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

        const { certificateId, tittle, image, describe, bookmark } = request.body || {}

        if (!certificateId) {
            return response.status(400).json({
                message: 'provide certificate Id',
                error: true,
                success: false
            })
        }

        const certificate = await certificateModel.findByIdAndUpdate(certificateId,
            {
                ...(tittle && { tittle: tittle }),
                ...(image && { image: image }),
                ...(describe && { describe: describe }),
                ...({ bookmark: bookmark })
            }
        )

        const updateAllof = await allOfModel.findOneAndUpdate(
            {},
            bookmark ? {
                $addToSet: { all_certificate: certificateId }
            } : {
                $pull: { all_certificate: certificateId }
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

        const updateAllOfDetails = await allOfModel.findOneAndUpdate(
            {},
            {
                $pull: { all_certificate: certificateId }
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