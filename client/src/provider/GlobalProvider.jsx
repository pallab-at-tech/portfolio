import { createContext, useContext, useEffect, useState } from "react";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAllOfDetails } from "../store/allOfSlice";


export const GlobalContext = createContext(null)
export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider  = ({ children }) => {
    
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    )

    const user = useSelector(state => state?.user)
    const dispatch = useDispatch()

    const fetchAllDetails = async() =>{
        try {

            const response = await Axios({
                ...SummaryApi.fetch_allOf_data
            })

            const {data : responseData} = response

            if(responseData?.success){
                dispatch(setAllOfDetails(responseData?.data))
            }
            
        } catch (error) {
            // console.log("error from global provider",error)
        }
    }

    useEffect(()=>{

        fetchAllDetails()

    },[user])


    useEffect(()=>{

        if(darkMode){
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
        }
        else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
        }
    },[darkMode])
    

    return (
        <GlobalContext.Provider value={{darkMode , setDarkMode , fetchAllDetails}}>
            {
                children
            }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider 
