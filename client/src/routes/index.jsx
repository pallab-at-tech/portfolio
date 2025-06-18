import { createBrowserRouter } from 'react-router-dom'
import App from "../App"
import DarkModeToggle from '../features/DarkModeToggle'
import About from '../pages/About'
import Education from '../pages/Education'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Others from "../pages/Others"
import Home from '../pages/Home'
import SignUpPage from "../pages/SignUpPage"
import SignInPage from "../pages/SignInPage"
import ForgotPassword from '../pages/ForgotPassword'
import OtpVerification from '../pages/OtpVerification'
import ResetPassword from '../pages/ResetPassword'
import Dashboard from '../layout/Dashboard'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,



        children: [
            {
                path: "",
                element: <Home />

            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/education",
                element: <Education />
            },
            {
                path: "/skills",
                element: <Skills />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/SignUp",
                element: <SignUpPage />
            },
            {
                path: "/SignIn",
                element: <SignInPage />
            },
            {
                path : "/forgot-password",
                element : <ForgotPassword/>
            },
            {
                path : "/Otp-verification",
                element : <OtpVerification/>
            },
            {
                path : "/reset-password",
                element : <ResetPassword/>
            },
            {
                path : "/dashboard/:user",
                element : <Dashboard/>
            }
        ]
    },
    {
        path: "/Others",
        element: <Others />

    },


])

export default router