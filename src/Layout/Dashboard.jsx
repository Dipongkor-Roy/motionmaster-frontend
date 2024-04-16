
import { FaHome,FaPlusCircle,FaRegEdit,FaShoppingCart, FaUserCheck, FaUsers } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";

import { useState } from "react";

const Dashboard = () => {
  const [isAdmin]=useState(true);

  const svg=<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m20 3h-16c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h6 2 8c1.103 0 2-.897 2-2v-14c0-1.103-.897-2-2-2zm-16 16v-12h6v12zm8 0v-12h8v-2l.002 14z"/><path d="m6 10h2v2h-2zm0 4h2v2h-2z"/></svg>
  // todo:admin hook work
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
       
     <div className="m-5">
     <Outlet/>
     </div>
        <span className="flex items-center justify-center">
        <label htmlFor="my-drawer" className=" m-3 btn rounded-xl bg-green-100 hover:bg-green-200 drawer-button lg:hidden">{svg}</label>
        </span>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-green-100 text-base-content">
            {/* Sidebar content here */}
           { isAdmin?
           <>
         <Link to='/dashboard/adminHome'> <li><a><FaUserCheck />Admin Home</a></li></Link>
           <Link to='/dashboard/addServices'><li><a><FaPlusCircle />Add Services</a></li></Link>
          <Link to='/dashboard/manageServices'> <li><a><FaRegEdit />Manage Services</a></li></Link>
        <Link to='/dashboard/allUsers'>   <li><a><FaUsers /> All Users</a></li></Link>
    
            </>
          :
          <>
          <li><NavLink to='/dashboard/userHome'><FaHome />User Home</NavLink></li>
          <li><NavLink to='/dashboard/paymentHistory'><MdOutlinePayment />Payment History</NavLink></li>
          <li><NavLink to='/dashboard/myCart'><FaShoppingCart />My Cart</NavLink></li>
          
          </>
          
          }
            <div className="divider mt-11 font-light"></div>
         
          
          <li><NavLink to='/'><FaHome /> Home Page</NavLink></li>
          
     
            
  
          </ul>
          
        </div>
        
      </div>
        
    );
};

export default Dashboard;