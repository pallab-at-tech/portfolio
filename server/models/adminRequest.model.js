import mongoose from 'mongoose'

const adminRequestSchema = new mongoose.Schema({

    all_adminRequest : [
        {
            type : mongoose.Schema.ObjectId,
            ref : "user"
        }
    ],
    all_admin_list : [
        {
            type : mongoose.Schema.ObjectId,
            ref : "user"
        }
    ]
},{
    timestamps : true
})

const adminRequestModel = mongoose.model("adminrequest",adminRequestSchema)
export default adminRequestModel