import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home"
import Main from "../Layout/Main";
import AllServices from "../Pages/Services/AllServices";
export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
            path:'/',
                element:<Home/>
            },
            {
                path:'/services',
                element:<AllServices/>
            }
        ]
    }
])