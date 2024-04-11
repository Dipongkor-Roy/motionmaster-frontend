import { useState } from "react";
import { FaHome,FaShoppingCart } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isAdmin]=useState(false);
  // todo:admin hook work
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        <Outlet/>
          <label htmlFor="my-drawer" className="btn  btn-primary drawer-button lg:hidden">Open drawer</label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-green-100 text-base-content">
            {/* Sidebar content here */}
           { isAdmin?
           <>
           <li><a>Admin Home</a></li>
           <li><a>Stats</a></li>
           <li><a>All Users</a></li>
    
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