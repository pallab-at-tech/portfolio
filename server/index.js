import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet'
import dotenv from "dotenv"
dotenv.config();


// server connection establish
import connectDB from './config/connectDB.js';
import userRoute from './route/user.route.js';

const app = express();

// app's internal middlewires
app.use(cors({
    credentials: true,
    origin: process.env.FRONTENT_URL
}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(helmet({
    crossOriginResourcePolicy: false
}))



// first server checking
app.get("/", (req, res) => {
    res.json({
        message: "hey there , i am about to staring ..."
    })
})

// other routes
app.use("/api/user",userRoute)

// if you want to give another port give it in .env file by PORT
const PORT = 8080 || process.env.PORT

connectDB().then(() => {

    app.listen(PORT, () => {
        console.log(`Server is running in http://localhost:${PORT}`)
    })
})

