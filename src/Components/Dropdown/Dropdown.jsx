import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  m-1">
        <p>
          <img
            className="w-5 h-5 "
            src="https://www.svgrepo.com/show/166680/login-button.svg"
            alt=""
          />
        </p>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content  menu shadow bg-slate-50 rounded-box w-auto "
      >
        <li>
          <Link to="/logIn">
            <button className="btn btn-sm  bg-green-100 hover:bg-green-200 rounded-md text-slate-800">
              Log In
            </button>
          </Link>
        </li>

        <li>
          <Link to="/signUp">
            <button className="btn btn-sm  bg-green-100 hover:bg-green-200 rounded-md text-slate-800">
              Sign Up
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
