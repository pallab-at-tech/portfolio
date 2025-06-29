import userModel from "../models/user.model.js"

export const admin = async(request, response, next) => {
    try {

        const userId = request.userId 

        const user = await userModel.findById(userId)

        if(!user.admin_verify){
            return response.status(400).json({
                message : "permission denied",
                error : true,
                success : false
            })
        }

        next()

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}