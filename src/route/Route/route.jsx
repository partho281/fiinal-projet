import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../components/shared/Header/Not Found/NotFound";
import Main from "../../layout/Main/main";
import Home from "./Home";
import About from "./page/Home/a/About/About";
import Contact from "../../components/contact/Contact";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element : <Contact/>

            }
        ]
    },
    {
        path:'/',
        element:<NotFound></NotFound>

    }
])
export default router