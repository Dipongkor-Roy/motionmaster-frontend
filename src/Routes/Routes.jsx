import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import AllServices from "../Pages/Services/AllServices";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/UserHome/UserHome";
import MyCart from "../Pages/Dashboard/MyCart";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import AdminHome from "../Pages/Dashboard/AdminHome";
import AddServices from "../Pages/Dashboard/AddServices";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageServices from "../Pages/Dashboard/ManageServices";

import UpdateServices from '../Pages/Dashboard/UpdateServices'
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <PrivateRoutes><AllServices /></PrivateRoutes>,
      },{
        path:'/contact',
        element:<ContactUs/>
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path:'/about',
        element:<AboutUs/>
      }
     
    ],
  },
  { 
    path:'*',
    element:<PageNotFound/>
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
    children: [
      {
        path: "userhome",
        element: <UserHome />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "myCart",
        element: <MyCart />,
      },
      //admin
      {
        path:'adminHome',
        element:<AdminRoutes><AdminHome/></AdminRoutes>

      },
      {
        path:'addServices',
        element:<AddServices/>
      },
      {
        path:'allUsers',
        element:<AdminRoutes><AllUsers/></AdminRoutes>
      },
    {
        path:'manageServices',
        element:<AdminRoutes><ManageServices/></AdminRoutes>
      },
      {
        path:'updateService/:id',
        element:<AdminRoutes><UpdateServices/></AdminRoutes>,
        loader:({params})=>fetch(`https://motionmaster-server.vercel.app/services/${params.id}`)
      }
    ],
  },
]);
