import { useContext } from "react";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { useScrollPosition } from "../../Hooks/useScrollPosition";
import logo from "../../assets/LogoMm.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthCont";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const svg = (
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m20 3h-16c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h6 2 8c1.103 0 2-.897 2-2v-14c0-1.103-.897-2-2-2zm-16 16v-12h6v12zm8 0v-12h8v-2l.002 14z" />
      <path d="m6 10h2v2h-2zm0 4h2v2h-2z" />
    </svg>
  );
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const navBarDetails = [
    { path: "/", text: "Home" },
    { path: "/services", text: "All Services" },
    { path: "/", text: "About Us" },
    { path: "/contact", text: "Contact Us" },
  ];
  const scrollPos = useScrollPosition();

  const handleLogout = () => {
    logOut().then(() => {
      console.log("Log Out");
    });
  };
  return (
    <div
      className={`navbar bg-base-100 h-16 sticky top-0 z-50 transition-shadow ${
        scrollPos > 0
          ? "shadow bg-opacity-60 backdrop-blur-lg backdrop-filter"
          : "shadow-none"
      }`}
    >
      <div className="flex-1 navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="p-[12px] lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="shadow-lg menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-100 rounded-box w-52"
          >
            {navBarDetails.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  <a className="text-sm font-md">{item.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/">
          <img className="w-16 h-auto" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navBarDetails.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>
                <a className="text-sm font-md">{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none ">
        {user && isAdmin && (
          <div className="tooltip tooltip-bottom" data-tip="Dashboard">
            <div className="btn btn-ghost btn-circle">
              <Link to="/dashboard/adminHome"> {svg}</Link>
            </div>
          </div>
        )}

        <div className="dropdown dropdown-end">
          <Link to="/dashboard/myCart">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart?.length || 0}
                </span>
              </div>
            </div>
          </Link>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          ></div>
        </div>
        <div className="dropdown dropdown-end">
          {user ? (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="photo" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to='/dashboard'><a className="justify-between">
                    Dashboard
                    <span className="badge ml-3">New</span>
                  </a></Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </>
          ) : (
            <Dropdown />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
