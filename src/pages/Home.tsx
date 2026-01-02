import AboutMeSection from '../components/AboutMeSection';
import BusinessEcosystem from '../components/BusinessEcosystem';
import ContactSection from '../components/ContactSection';
import DigitalInnovation from '../components/DigitalInnovation';
import HomeBanner from '../components/homeBanner';
import WhyChooseSection from '../components/WhyChooseSection';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <AboutMeSection />
      <BusinessEcosystem />
      <DigitalInnovation />
      <WhyChooseSection />
      <ContactSection />
    </div>
  );
};

export default Home;