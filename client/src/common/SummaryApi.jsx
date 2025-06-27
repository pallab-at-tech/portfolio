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
    },
    create_education_data : {
        url : "/api/education-data/education-create",
        method : "post"
    },
    update_education_data : {
        url : "/api/education-data/update-education-data",
        method : "put"
    },
    delete_education_data : {
        url : "/api/education-data/delete-education-data",
        method : "delete"
    },
    create_Project_details : {
        url : "/api/project-data/project-create",
        method : "post"
    },
    update_Project_details : {
        url : "/api/project-data/update-project-details",
        method : "put"
    },
    delete_project_details : {
        url : "/api/project-data/delete-project",
        method : "delete"
    },
    create_Certificate_details : {
        url : "/api/certificate-data/certificate-create",
        method : "post"
    },
    get_Certificate_details : {
        url : "/api/certificate-data/get-certificate",
        method : "post"
    },
    update_certificate_details : {
        url : "/api/certificate-data/update-certificate-details",
        method : "put"
    },
    delete_certificate_details : {
        url : "/api/certificate-data/delete-certificate-details",
        method : "delete"
    },
    upadate_user_details : {
        url : "/api/user/update-user",
        method : "put"
    }

}

export default SummaryApi