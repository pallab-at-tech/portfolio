import mongoose from "mongoose";

const achievementsSchema = new mongoose.Schema({
    tittle : {
        type : String,
        default : ""
    },
    image : {
        type : String,
        default : ""
    },
    video : {
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

const achievementsModel = mongoose.model("achievements",achievementsSchema)
export default achievementsModel