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
        element: <AllServices />,
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
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
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
        element:<AdminHome/>

      },
      {
        path:'addServices',
        element:<AddServices/>
      },
      {
        path:'allUsers',
        element:<AllUsers/>
      }
    ],
  },
]);
