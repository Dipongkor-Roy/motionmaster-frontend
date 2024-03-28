import { Link } from "react-router-dom";
import useAllServices from "../../Hooks/useAllServices";


const AllServices = () => {
    const [services] = useAllServices();
    return (
        <div className="flex flex-col">
      <section className="text-gray-600 body-font">
        <h2 className="text-center text-gray-500 text-md">All Services : {services.length}</h2>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {services.map((service) => (
              <div key={service._id} className="lg:w-1/4 md:w-1/2 p-4 w-full ">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={service.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font font-medium mb-1">
                    {service.name}
                  </h3>
                  <h2 className="text-gray-900 title-font text-sm font-light">
                    {service.description}
                  </h2>
                  <div className="pt-3 flex justify-between items-center">
                    <p className="mt-1">${service.price}</p>
                    <Link to={`/${service.id}`}>
                      <button className="btn btn-sm bg-green-100 hover:bg-green-200 rounded-md text-slate-800">Grab It </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
</div>
    );
};

export default AllServices;