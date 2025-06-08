import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
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

const experienceModel = mongoose.model("experience",experienceSchema)
export default experienceModel