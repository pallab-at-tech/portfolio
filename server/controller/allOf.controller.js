import allOfModel from "../models/allOf.model.js"
import projectModel from "../models/project.model.js"

export const createAllOfDetails = async (request, response) => {

    try {

        const { name, email, resume, contact_number, about_me, github_link, linkedin_link, instragram_link, facebook_link } = request.body || {}

        const allData = await projectModel.find().select("_id")

        return response.json({
            message : 'project list',
            data : allData,
            error : false,
            success : true
        })

        // const payload = {
        //     name,
        //     email,
        //     resume,
        //     contact_number,
        //     about_me,
        //     github_link,
        //     linkedin_link,
        //     instragram_link,
        //     facebook_link
        // }

        // const allof = new allOfModel(payload)
        // const save = allof.save()


    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}