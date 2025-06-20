import allOfModel from "../models/allOf.model.js"
import projectModel from "../models/project.model.js"


export const createProjectDetails = async (request, response) => {
    try {

        const { tittle, body, project_deploy_link, project_git_link, video, image, status, feature, tech_uses } = request.body || {}

        if (!tittle || !body || !image || !status) {
            return response.status(400).json({
                message: 'please provide tittle , little description , image and status',
                error: true,
                success: false
            })
        }

        if (status) {
            if (status === "DONE" || status === "PENDING") {

            }
            else {
                return response.status(400).json({
                    message: 'status must be DONE OR PENDING',
                    error: true,
                    success: false
                })
            }
        }

        const payload = {
            tittle,
            body,
            project_deploy_link,
            project_git_link,
            video,
            image,
            status,
            feature,
            tech_uses
        }

        const project = new projectModel(payload);
        const save = await project.save()

        const pushId = await allOfModel.findOneAndUpdate(
            {},
            {
                $push: {
                    projectList: save._id
                }
            }
        )

        return response.json({
            message: 'project created successfully',
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

export const getProjectDetails = async (request, response) => {
    try {

        const { projectId } = request.body || {}

        if (!projectId) {
            return response.status(400).json({
                message: 'please provide project Id',
                error: true,
                success: false
            })
        }

        const project = await projectModel.findById(projectId)

        if (!project) {
            return response.status(400).json({
                message: "provide project id is'nt available",
                error: true,
                success: false
            })
        }

        return response.json({
            message: 'project details',
            data: project,
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

export const updateProjectDetails = async (request, response) => {
    try {

        const { projectId, tittle, body, project_deploy_link, project_git_link, video, image, status, feature, tech_uses } = request.body || {}

        if (!projectId) {
            return response.status(400).json({
                message: 'please provide project Id',
                error: true,
                success: false
            })
        }

        if (status) {
            if (status === "DONE" || status === "PENDING") {

            }
            else {
                return response.status(400).json({
                    message: 'status must be DONE OR PENDING',
                    error: true,
                    success: false
                })
            }
        }

        const projectUpdate = await projectModel.findByIdAndUpdate(projectId ,
            {
                ...(tittle && { tittle: tittle }),
                ...(body && { body: body }),
                ...(project_deploy_link !== null && { project_deploy_link: project_deploy_link }),
                ...(project_git_link !== null && { project_git_link: project_git_link }),
                ...(video !== null && { image: image }),
                ...(status !== null && { status: status }),
                ...(feature && { feature: feature }),
                ...(tech_uses && { tech_uses: tech_uses })
            }
        )

        if(!projectUpdate){
            return response.json({
                message : "provide project id is'nt available",
                error : false,
                success : true
            })
        }

        return response.json({
            message : 'project Successfully update',
            error : false,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const deleteProjectDetails = async (request, response) => {
    try {

        const { projectId } = request.body || {}

        if (!projectId) {
            return response.status(400).json({
                message: 'please provide project Id',
                error: true,
                success: false
            })
        }

        const deleteModel = await projectModel.findByIdAndDelete(projectId)

        if (!deleteModel) {
            return response.status(400).json({
                message: "provided project id is'nt available",
                error: true,
                success: false
            })
        }

        if(deleteModel){
            const deletId = await allOfModel.findOneAndUpdate(
                {},
                {
                    $pull : {
                        projectList : projectId
                    }
                }
            )
        }

        return response.json({
            message: 'project deleted successfully',
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

