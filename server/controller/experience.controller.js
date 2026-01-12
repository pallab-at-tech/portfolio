import allOfModel from "../models/allOf.model.js"
import experienceModel from "../models/experience.model.js"

export const createExperienceDetails = async (request, response) => {

    try {
        const { tittle, institute, startDate, endDate, describe = [], tech_stack = [], github_link, view_certificate } = request.body || {}

        if (!tittle) {
            return response.status(400).json({
                message: "Please provide title",
                error: true,
                success: false
            })
        }

        if (!institute) {
            return response.status(400).json({
                message: "Please provide institution",
                error: true,
                success: false
            })
        }

        if (!describe || !Array.isArray(describe) || describe.length < 1) {
            return response.status(400).json({
                message: "Please provide description",
                error: true,
                success: false
            })
        }

        const payload = {
            tittle,
            institute,
            startDate,
            endDate,
            describe,
            tech_stack,
            github_link,
            view_certificate
        }

        const experience = new experienceModel(payload)
        const save = await experience.save()

        await allOfModel.findOneAndUpdate(
            {},
            {
                $push: {
                    all_experience: save._id
                }
            }
        )

        return response.json({
            message: 'experience created successfully',
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

export const getExprienceDetails = async (request, response) => {
    try {

        const { experienceId } = request.body || {}

        if (!experienceId) {
            return response.status(400).json({
                message: 'please provide experience Id',
                error: true,
                success: false
            })
        }

        const experience = await experienceModel.findById(experienceId)

        if (!experience) {
            return response.status(400).json({
                message: "provide experience id is'nt available",
                error: true,
                success: false
            })
        }

        return response.json({
            message: 'experience details',
            data: experience,
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

export const upadateExperienceDetails = async (request, response) => {

    try {
        const { experienceId, tittle, institute, startDate, endDate, describe = [], tech_stack = [], github_link, view_certificate } = request.body || {}

        if (!experienceId) {
            return response.status(400).json({
                message: 'please provide experience Id',
                error: true,
                success: false
            })
        }

        if (!tittle) {
            return response.status(400).json({
                message: "Title field can't be empty",
                error: true,
                success: false
            })
        }

        if (!institute) {
            return response.status(400).json({
                message: "Institute field can't be empty",
                error: true,
                success: false
            })
        }

        if (!describe || !Array.isArray(describe) || describe.length < 1) {
            return response.status(400).json({
                message: "Describe field can't be empty",
                error: true,
                success: false
            })
        }

        const experienceUpdate = await experienceModel.findByIdAndUpdate(
            experienceId,
            {
                ...(tittle && { tittle: tittle }),
                ...(describe && Array.isArray(describe) && { describe: describe }),
                ...(institute && { institute: institute }),
                startDate: startDate,
                endDate: endDate,
                tech_stack: tech_stack,
                github_link: github_link,
                view_certificate: view_certificate
            },
            { new: true }
        )

        if (!experienceUpdate) {
            return response.json({
                message: "provide experince id is'nt available",
                error: false,
                success: true
            })
        }

        return response.json({
            message: 'experience Successfully update',
            error: false,
            success: true,
            data : experienceUpdate
        })
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }


}

export const deleteExperienecDetails = async (request, response) => {
    try {

        const { experienceId } = request.body || {}

        if (!experienceId) {
            return response.status(400).json({
                message: 'please provide experience Id',
                error: true,
                success: false
            })
        }

        const deleteExperienece = await experienceModel.findByIdAndDelete(experienceId)

        if (!deleteExperienece) {
            return response.status(400).json({
                message: "provided experince id is'nt available",
                error: true,
                success: false
            })
        }

        const deletId = await allOfModel.findOneAndUpdate(
            {},
            {
                $pull: {
                    all_experience: experienceId
                }
            }
        )

        return response.json({
            message: 'experince deleted successfully',
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
