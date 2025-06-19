import mongoose from "mongoose";

const eductionSchema = new mongoose.Schema({
    school_college : {
        type : String,
        default : ""
    },
    othersDetails : {
        type : String,
        default : ""
    },
    more_details : {
        type : Object,
        default : {}
    }
},{
    timestamps : true
})

const educationModel = mongoose.model("education" , eductionSchema)
export default educationModel