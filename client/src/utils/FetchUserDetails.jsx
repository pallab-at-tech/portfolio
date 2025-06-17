import SummaryApi from "../common/SummaryApi"
import axios from "./Axios"

const fetchUserDetails = async () => {

    try {
        const response = await axios({
            ...SummaryApi.fetch_user_details
        })

        return response.data

    } catch (error) {
        console.log(error)
    }
}

export default fetchUserDetails