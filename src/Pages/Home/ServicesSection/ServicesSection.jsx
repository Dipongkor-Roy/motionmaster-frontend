import { Link } from "react-router-dom";
import useAllServices from "../../../Hooks/useAllServices";
import ServiceCard from "../../../Components/ServiceCard/ServiceCard";

const ServicesSection = () => {
  const [services] = useAllServices();
  
  return (
    <div className="flex flex-col">
      <section className="text-gray-600 body-font">
        <h2 className="text-center text-gray-500 text-md">Our Services</h2>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center">
        <Link to="/services">
          {" "}
          <button className="btn btn-md flex mx-auto mt-16 text-white bg-green-500/65 border-0  focus:outline-none hover:bg-green-600/60 text-lg rounded-xl">All Services</button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
