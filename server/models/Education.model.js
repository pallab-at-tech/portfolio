import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({

    institute_name: {
        type: String,
        default: "",
        required: [true, "provide institute name"]
    },
    location: {
        type: String,
        default: ""
    },
    qualification: [
        {
            level: {
                type: String,
                default: "",
                required: [true, "provide institute level"]
            },
            stream: {
                type: String,
                default: "",
                required: [true, "provide stream"]
            },
            startDate: {
                type: String,
                default: "",
                required: [true, "provide start date"]
            },
            endDate: {
                type: String,
                default: "",
                required: [true, "provide end date"]
            },
            typeOfScore: {
                type: String,
                enum: ["CGPA", "PERCENTAGE"],
                default: "CGPA"
            },
            score: {
                type: String,
                default: "",
                required: [true, "provide institute score"]
            }
        }
    ]
}, {
    timestamps: true
})

const educationModel = mongoose.model("education", educationSchema)
export default educationModel