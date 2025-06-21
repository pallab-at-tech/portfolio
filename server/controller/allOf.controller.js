import allOfModel from "../models/allOf.model.js"
import projectModel from "../models/project.model.js"
import allAchievementModel from "../models/achievements.model.js"
import certificateModel from "../models/certificate.model.js"
import educationModel from "../models/Education.model.js"
import experienceModel from "../models/experience.model.js"

export const createAllOfDetails = async (request, response) => {

    try {

        const { name, email, resume, contact_number, about_me, github_link, linkedin_link, instragram_link, facebook_link } = request.body || {}

        if (!name) {

            return response.status(400).json({
                message: 'provide name',
                error: true,
                success: false
            })
        }

        if (!email) {

            return response.status(400).json({
                message: 'provide email',
                error: true,
                success: false
            })
        }

        if (!contact_number) {

            return response.status(400).json({
                message: 'provide contact number',
                error: true,
                success: false
            })
        }

        if (!github_link) {

            return response.status(400).json({
                message: 'provide github profile link',
                error: true,
                success: false
            })
        }

        if (!linkedin_link) {

            return response.status(400).json({
                message: 'provide linkedin profile link',
                error: true,
                success: false
            })
        }

        if(!about_me){
             return response.status(400).json({
                message: 'provide about me',
                error: true,
                success: false
            })
        }

        const payload = {
            name,
            email,
            resume,
            contact_number,
            about_me,
            github_link,
            linkedin_link,
            instragram_link,
            facebook_link
        }

        const allOfData = new allOfModel(payload)
        const save = await allOfData.save()

        return response.json({
            message: 'all of the data created',
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

export const getAllOfDetails = async (request, response) => {

    try {
         
        const data = await allOfModel.findOne().populate("projectList all_achievement all_certificate all_education all_experience")

        if (!data) {
            return response.status(400).json({
                message: 'please first create data',
                error: true,
                success: false
            })
        }

        return response.json({
            message: 'all of data',
            data: data,
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

export const updateAllOfDetails = async (request, response) => {
    try {

        const { name, email, resume, contact_number, about_me, github_link, linkedin_link, instragram_link, facebook_link } = request.body || {}

        const data = await allOfModel.findOneAndUpdate(
            {},
            {
                ...(name && {name : name}),
                ...(email && {email : email}),
                ...(resume !== undefined &&  {resume : resume}),
                ...(contact_number && {contact_number : contact_number}),
                ...(about_me !== undefined && {about_me : about_me}),
                ...(github_link && {github_link : github_link}),
                ...(linkedin_link && {linkedin_link : linkedin_link}),
                ...(instragram_link !== undefined && {instragram_link : instragram_link}),
                ...(facebook_link !== undefined && {facebook_link : facebook_link})
            }
        )

        return response.json({
            message: 'data update successfully',
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