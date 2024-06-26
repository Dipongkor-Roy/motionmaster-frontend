
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import   { AuthContext } from "../../Providers/AuthCont";
import Swal from "sweetalert2";
import { useContext } from "react";
const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit,reset} = useForm();
  const {logIn} =useContext(AuthContext);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  const onSubmitLogIn = (data) => {
    console.log(data.email);
    const email = data.email;
    const password = data.password;
    logIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      Toast.fire({
        icon: "success",
        title: "Log in successfully",
      });
      navigate(from, { replace: true });
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitLogIn)}
      className="text-gray-600 body-font"
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Securely access your Motion Master account to streamline your video
            editing projects with ease
          </h1>
          <p className="leading-relaxed mt-4">
            Enter your credentials to unlock a world of creative possibilities.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-slate-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Log In
          </h2>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-green-400/70 border-0 py-2 px-8 focus:outline-none hover:bg-green-500/70 rounded text-lg">
            Log In
          </button>
          <p className="text-xs text-gray-500 mt-3">
            New To Motion Master?{" "}
            <Link to="/signUp">
              <p className="link mt-1">Create An New Account</p>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LogIn;
