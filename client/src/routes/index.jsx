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

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                path : "",
                element : <Home/>

            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path : "/education",
                element : <Education/>
            },
            {
                path : "/skills",
                element : <Skills/>
            },
            {
                path : "/projects",
                element : <Projects/>
            },
            {
                path : "/Others",
                element : <Others/>

            },
            {
                path : "/contact",
                element : <Contact/>
            }
        ]
    },

])

export default router