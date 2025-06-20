import allOfModel from "../models/allOf.model.js"
import experienceModel from "../models/experience.model.js"

export const createExperienceDetails = async (request, response) => {

    try {
        const { tittle, image, video, describe, other_link } = request.body || {}

        if (!tittle || !describe) {
            return response.status(400).json({
                message: 'please provide title and description',
                error: true,
                success: false
            })
        }

        const payload = {
            tittle,
            image,
            video,
            describe,
            other_link
        }

        const experience = new experienceModel(payload)
        const save = await experience.save()

        const pushId = await allOfModel.findOneAndUpdate(
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
        const { experienceId, tittle, image, video, describe, other_link } = request.body || {}

        if (!experienceId) {
            return response.status(400).json({
                message: 'please provide experience Id',
                error: true,
                success: false
            })
        }


        const experienceUpdate = await experienceModel.findByIdAndUpdate(experienceId,
            {
                ...(tittle && { tittle: tittle }),
                ...(describe && { describe: describe }),
                ...(other_link !== null && { other_link: other_link }),
                ...(video !== null && { video: video }),
                ...(image !== null && { image: image })
            }
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

        if(deleteExperienece){
            const deletId = await allOfModel.findOneAndUpdate(
                {},
                {
                    $pull : {
                        all_experience : experienceId
                    }
                }
            )
        }

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
