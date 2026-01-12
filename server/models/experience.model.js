import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    tittle: {
        type: String,
        default: ""
    },
    institute: {
        type: String,
        default: ""
    },
    startDate: {
        type: Date,
        default: null
    },
    endDate: {
        type: Date,
        default: null
    },
    describe: [
        {
            type: String,
            default: ""
        }
    ],
    tech_stack: [
        {
            type: String,
            default: ""
        }
    ],
    github_link: {
        type: String,
        default: ""
    },
    view_certificate: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
})

const experienceModel = mongoose.model("experience", experienceSchema)
export default experienceModel