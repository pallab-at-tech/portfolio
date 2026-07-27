import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from "../App"
import Others from "../pages/Others"
import Home from '../pages/Home'
import SignUpPage from "../pages/SignUpPage"
import SignInPage from "../pages/SignInPage"
import ForgotPassword from '../pages/ForgotPassword'
import OtpVerification from '../pages/OtpVerification'
import ResetPassword from '../pages/ResetPassword'

const Dashboard = lazy(() => import("../layout/Dashboard"))
const Profile = lazy(() => import("../pages/Profile"))
const ProjectDetailsEdit = lazy(() => import("../layout/Admin/ProjectDetailsEdit"))
const EducationDetailsEdit = lazy(() => import("../layout/Admin/EducationDetailsEdit"))
const OthersDetailsEdit = lazy(() => import("../layout/Admin/OthersDetailsEdit"))
const AllOfDetailsEdit = lazy(() => import("../layout/Admin/AllOfDetailsEdit"))
const InternshipDetailsEdit = lazy(() => import("../layout/Admin/InternshipDetailsEdit"))

import OtherCertificate from '../pages/OtherCertificate'
import AdminPermission from '../features/AdminPermission'
import PageNotFound from '../pages/PageNotFound'
import ErrorBoundary from '../pages/ErrorBoundary'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                path: "",
                element: <Home />,
                errorElement: <ErrorBoundary />
            },
            {
                path: "/SignUp",
                element: <SignUpPage />,
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
                errorElement: <ErrorBoundary />,
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
                        path: "internEdit",
                        element: <AdminPermission><InternshipDetailsEdit /></AdminPermission>
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
        errorElement: <ErrorBoundary />
    },
    {
        path: "/Others/:other_ceritificate",
        element: <OtherCertificate />,
        errorElement: <ErrorBoundary />
    },
    {
        path: "*",
        element: <PageNotFound />
    }
])

export default router