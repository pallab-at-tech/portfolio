import { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext(null)
export const useGlobalProvider = () => useContext(GlobalContext)

const GlobalProvider  = ({ children }) => {
    
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    )


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
        <GlobalContext.Provider value={{darkMode , setDarkMode}}>
            {
                children
            }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider 
