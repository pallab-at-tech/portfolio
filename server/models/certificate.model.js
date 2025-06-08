import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
    tittle : {
        type : String,
        default : ""
    },
    image : {
        type : String,
        default : ""
    },
    describe : {
        type : String,
        default : ""
    }
},{
    timestamps : true
})

const certificateModel = mongoose.model("certificate",certificateSchema)
export default certificateModel