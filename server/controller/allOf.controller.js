
export const createAllOfDetails = async (request , response)=>{

    try {
        
        const {} = request.body || {}
        
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}