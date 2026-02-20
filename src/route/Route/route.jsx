import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../components/shared/Header/Not Found/NotFound";
import Main from "../../layout/Main/main";
import Home from "./Home";
import About from "./page/Home/a/About/About";
import Contact from "../../components/contact/Contact";
import Service from "../../components/service/Service";
import Signin from "./page/SignUp/Signin/Signin";
import SignUp from "./page/SignUp/SignUp";
import Services from "./page/SignUp/Signin/Services/Services";



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

            },
            {
                path:'/service',
                element:<Service></Service>
            },
             {
                path:'/Signin',
                element:<Signin></Signin>
            },
             {
                path:'/SignUp',
                element:<SignUp></SignUp>
            },
             {
                path:'/Services',
                element:<Services></Services>
            },
        ]
    },
    {
        path:'/',
        element:<NotFound></NotFound>

    }
])
export default router