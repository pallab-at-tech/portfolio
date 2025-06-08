import mongoose from "mongoose";

const allOfSchema = new mongoose.Schema({
    productList : [
        {
            type : mongoose.Schema.ObjectId,
            ref : "project"
        }
    ],
    resume : {
        type : String,
        default : ""
    },
    contact_number : {
        type : String,
        default : null
    },
    about_me : {
        type : String,
        default : ""
    },
    github_link : {
        type : String,
        default : null
    },
    linkedin_link : {
        type : String,
        default : null
    },
    instragram_link : {
        type : String,
        default : null
    },
    facebook_link : {
        type : String,
        default : null
    },
    all_experience : [
        {
            type : mongoose.Schema.ObjectId,
            ref : "experience"
        }
    ],
    all_achievement : [
        {
            type : mongoose.Schema.ObjectId,
            ref : "achievements"
        }
    ],
    all_certificate : [
        {
            type : mongoose.Schema.ObjectId,
            ref : "certificate"
        }
    ]

},{
    timestamps : true
})

const allOfModel = mongoose.model("allof" , allOfSchema)
export default allOfModel