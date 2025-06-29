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
import Profile from '../pages/Profile'
import ProjectDetailsEdit from '../layout/Admin/ProjectDetailsEdit'
import EducationDetailsEdit from '../layout/Admin/EducationDetailsEdit'
import SkillDetailsEdit from '../pages/SkillDetailsEdit'
import OthersDetailsEdit from '../layout/Admin/OthersDetailsEdit'
import AllOfDetailsEdit from "../layout/Admin/AllOfDetailsEdit"
import OtherCertificate from '../pages/OtherCertificate'
import AdminPermission from '../features/AdminPermission'

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
                path: "/forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "/Otp-verification",
                element: <OtpVerification />
            },
            {
                path: "/reset-password",
                element: <ResetPassword />
            },
            {
                path: "/dashboard/:user",
                element: <Dashboard />,

                children: [
                    {
                        index: true,
                        element: <Profile />

                    },
                    {
                        path: "allOfEdit",
                        element: <AdminPermission><AllOfDetailsEdit /></AdminPermission>
                    },
                    {
                        path: "projectEdit",
                        element: <AdminPermission><ProjectDetailsEdit /></AdminPermission>
                    },
                    {
                        path: "educationEdit",
                        element: <AdminPermission><EducationDetailsEdit /></AdminPermission>
                    },
                    {
                        path: "skillEdit",
                        element: <AdminPermission><SkillDetailsEdit /></AdminPermission>
                    },
                    {
                        path: "othersEdit",
                        element: <AdminPermission><OthersDetailsEdit /></AdminPermission>
                    }
                ]
            }
        ]
    },
    {
        path: "/Others",
        element: <Others />,
    },
    {
        path: "/Others/:other_ceritificate",
        element: <OtherCertificate />
    }


])

export default router