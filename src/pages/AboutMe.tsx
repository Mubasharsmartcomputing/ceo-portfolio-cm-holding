import AboutBanner from '../components/aboutBanner';
import BottomDecoration from '../components/BottomDecoration';
import ContactSection from '../components/ContactSection';
import DigitalInnovation from '../components/DigitalInnovation';

const AboutMe = () => {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <AboutBanner />
      <BottomDecoration />
      <DigitalInnovation showTitle={false} />
      <ContactSection />
    </main>
  );
};

export default AboutMe;