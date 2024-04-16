/* eslint-disable react/prop-types */
import  { useContext } from "react";
import { AuthContext } from "../../Providers/AuthCont";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import Swal from 'sweetalert2/src/sweetalert2.js'

const ServiceCard = ({ service }) => { // Corrected the destructuring of props
  
  const { name, image, price, _id, description } = service;
  
  const { user } = useContext(AuthContext);
  const location =useLocation();
  const navigate=useNavigate();
  const [,refetch]=useCart();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  const handleAddtoCart = (service) => { // Removed serviceInfo parameter as it's not needed here
    console.log(service)
    if (user && user.email) {
      const serviceInfo = {
        serviceItem: _id,
        name,
        image,
        price,
        email: user.email
      };

      fetch('http://localhost:2000/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(serviceInfo)
      }).then((res) => res.json()
      ).then((data) => {
        console.log(data)
       if(data.acknowledged){ //important for inserting data to cart
        refetch();
         Toast.fire({
          icon: "success",
          title: "Added To The Cart"
        });
       }
       else{
        Swal.fire({
          title: "Please Login To Take Services",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "LogIn!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            navigate("/logIn",{state:{from: location}});
          }
        });
       }
      });
    }
  };

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font font-medium mb-1">
          {name}
        </h3>
        <h2 className="text-gray-900 title-font text-sm font-light ">
          {description}
        </h2>
        <div className="pt-3 flex justify-between items-center">
          <p className="mt-1">${price}</p>
          <button onClick={handleAddtoCart} className="btn btn-sm bg-green-100 hover:bg-green-200 rounded-md text-slate-800">Grab It </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
