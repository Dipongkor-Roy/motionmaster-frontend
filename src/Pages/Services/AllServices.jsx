import ServiceCard from "../../Components/ServiceCard/ServiceCard"; // Corrected typo in the file name
import useAllServices from "../../Hooks/useAllServices";

const AllServices = () => {
    const [services] = useAllServices();
  
    return (
        <div className="flex flex-col">
            <section className="text-gray-600 body-font">
                <h2 className="text-center text-gray-500 text-md">All Services : {services.length}</h2>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {services.map((service) => <ServiceCard key={service._id} service={service}></ServiceCard>)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllServices;
