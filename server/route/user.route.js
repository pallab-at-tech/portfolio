import express from 'express'
import { userEmailVerificationController, userForgotPassword, userLoginController, userLogOutController, userRefressingTokenController, userRegisterController, userResetPasswordController, userVerifyForgotPasswordController } from '../controller/user.controller.js';
import auth from '../middleware/auth.js';

const  userRoute = express();

userRoute.post("/register",userRegisterController)
userRoute.post("/login",userLoginController)
userRoute.post("/email-verification",userEmailVerificationController)
userRoute.get("/logout",auth,userLogOutController)
userRoute.put("/forgot-password",userForgotPassword)
userRoute.put("/forgot-password-otp",userVerifyForgotPasswordController)
userRoute.put("/reset-password",userResetPasswordController)
userRoute.post("/refresh-token",userRefressingTokenController)

export default userRoute