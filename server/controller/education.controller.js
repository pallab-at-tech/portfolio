import allOfModel from "../models/allOf.model"
import educationModel from "../models/Education.model.js"



export const createEducationDetails = async (request, response) => {
    try {

        const { institute_name, location, level, stream, startDate, endDate, typeOfScore, score } = request.body || {}

        if (!institute_name) {
            return response.status(400).json({
                message: 'please provide institute name',
                error: true,
                success: false
            })
        }
        if (!level) {
            return response.status(400).json({
                message: 'please provide level of qualification',
                error: true,
                success: false
            })
        }
        if (!stream) {
            return response.status(400).json({
                message: 'please provide stream',
                error: true,
                success: false
            })
        }
        if (!startDate) {
            return response.status(400).json({
                message: 'please provide start date',
                error: true,
                success: false
            })
        }
        if (!endDate) {
            return response.status(400).json({
                message: 'please provide end date',
                error: true,
                success: false
            })
        }
        if (!score) {
            return response.status(400).json({
                message: 'please provide institutional score',
                error: true,
                success: false
            })
        }

        const payload = {
            institute_name,
            location,
            qualification: [
                {
                    level,
                    stream,
                    startDate,
                    endDate,
                    typeOfScore,
                    score
                }
            ]
        }

        const education = new educationModel(payload)
        const save = await education.save()

        const pushId = await allOfModel.findOneAndUpdate(
            {},
            {
                $push: {
                    all_education: save._id
                }
            }
        )

        return response.json({
            message: 'education data created',
            data: save,
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

export const getEducationDetails = async (request, response) => {
    try {

        const { educationId } = request.body || {}

        if (!educationId) {
            return response.status(400).json({
                message: 'please provide education Id',
                error: true,
                success: false
            })
        }

        const education = await educationModel.findById(educationId)

        if (!education) {
            return response.status(400).json({
                message: "provide education id is'nt available",
                error: true,
                success: false
            })
        }

        return response.json({
            message: 'all of educational data',
            data: education,
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

export const updateEducationalDetails = async (request, response) => {
    try {

        const { educationId, institute_name, location, qualification } = request.body || {}

        if (!educationId) {
            return response.status(400).json({
                message: 'please provide education Id',
                error: true,
                success: false
            })
        }

        const education = await educationModel.findByIdAndUpdate(educationId,
            {
                ...(institute_name && { institute_name: institute_name }),
                ...(location !== undefined && { location: location }),
                ...(qualification && { qualification: qualification })
            }
        )

        if (!education) {
            return response.status(400).json({
                message: "provide education Id isn't available",
                error: true,
                success: false
            })
        }

        return response.json({
            message: 'eduction data update successfully',
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

export const deleteEducationalDetails = async (request, response) => {
    try {

        const { educationId } = request.body || {}

        if (!educationId) {
            return response.status(400).json({
                message: 'please provide education Id',
                error: true,
                success: false
            })
        }

        const deleteEducation = await educationModel.findByIdAndDelete(educationId)

        if (!deleteEducation) {
            return response.status(400).json({
                message: "provided education id is'nt available",
                error: true,
                success: false
            })
        }

        const deletId = await allOfModel.findOneAndUpdate(
            {},
            {
                $pull: {
                    all_education : educationId
                }
            }
        )

        return response.json({
            message: 'education data deleted successfully',
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