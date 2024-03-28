import ContactUs from "./ContactUs/ContactUs";
import ExtraSection from "./ExtraSection/ExtraSection";
import Hero from "./Hero/Hero";
import OurClients from "./OurClients/OurClients";
import ServicesSection from "./ServicesSection/ServicesSection";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Hero/>
            <OurClients/>
            <ServicesSection/>
            <ExtraSection/>
            <Testimonial/>
            <ContactUs/>
        </div>
    );
};

export default Home;