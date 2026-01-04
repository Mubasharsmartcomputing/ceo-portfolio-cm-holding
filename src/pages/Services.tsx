import CompaniesSection from "../components/CompaniesSection";
import ContactSection from "../components/ContactSection";
import ServiceBanner from "../components/serviceBanner";
import ServicesComponent from '../components/ServicesComponent';

const Services = () => {
  return (
    <div>
    <ServiceBanner />
    <ServicesComponent />
    <CompaniesSection />
    <ContactSection />
    </div>
  );
};

export default Services;