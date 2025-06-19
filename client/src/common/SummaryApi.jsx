export const baseURL = import.meta.env.BACKEND_URL

const SummaryApi = {
    register: {
        url: "/api/user/register",
        method: 'post'
    },
    login: {
        url: "/api/user/login",
        method: 'post'
    },
    forgot_password : {
        url : "/api/user/forgot-password",
        method : "put"
    },
    forgot_password_otp_verify : {
        url : "/api/user/forgot-password-otp",
        method : "put"
    },
    reset_password : {
        url : "/api/user/reset-password",
        method : "put"
    },
    fetch_user_details : {
        url : "/api/user/user-details",
        method : "get"
    },
    user_logOut : {
        url : "/api/user/logout",
        method : "get"
    }
}

export default SummaryApi