import AboutMeSection from '../components/AboutMeSection';
import BusinessEcosystem from '../components/BusinessEcosystem';
import CompaniesSection from '../components/CompaniesSection';
import ContactSection from '../components/ContactSection';
import DigitalInnovation from '../components/DigitalInnovation';
import FeaturedProject from '../components/FeaturedProject';
import HomeBanner from '../components/homeBanner';
import WhyChooseSection from '../components/WhyChooseSection';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <AboutMeSection />
      <BusinessEcosystem />
      <CompaniesSection />
      <FeaturedProject />
      <WhyChooseSection />
      <DigitalInnovation />
      <ContactSection />
    </div>
  );
};

export default Home;