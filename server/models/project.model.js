import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

    tittle: {
        type: String,
        default: ""
    },
    body: {
        type: String,
        default: ""
    },
    feature: [
        {
            type: String,
            default: ""
        }
    ],
    tech_uses: [
        {
            type: String,
            default: ""
        }
    ],
    project_deploy_link: {
        type: String,
        default: null
    },
    project_git_link: {
        type: String,
        default: null
    },
    video: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        enum: ["DONE", "PENDING"],
        default: "PENDING"
    }
}, {
    timestamps: true
})

const projectModel = mongoose.model("project", projectSchema)
export default projectModel