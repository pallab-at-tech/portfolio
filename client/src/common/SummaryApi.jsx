export const baseURL = import.meta.env.VITE_BACKEND_API_URL

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
    },
    fetch_allOf_data : {
        url : "/api/all-admin-data/get-data",
        method : "get"
    },
    create_allOf_data : {
        url : "/api/all-admin-data/data-create",
        method : "post"
    },
    update_allOf_data : {
        url : "/api/all-admin-data/update-data",
        method : "put"
    }
}

export default SummaryApi