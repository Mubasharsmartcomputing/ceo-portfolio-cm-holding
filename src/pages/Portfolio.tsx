import { PortfolioBanner } from '../components/portfolioBanner';
import PortfolioList from '../components/PortfolioList';
import StrategicBusinessProjects from '../components/StrategicBusinessProjects';
//import DHAGujranwalaProjects from '../components/DHAGujranwalaProjects';
import CompaniesAffiliations from '../components/CompaniesAffiliations';
//import ContactSection from '../components/ContactSection';
import BottomDecoration from '../components/BottomDecoration';

const Portfolio = () => {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <PortfolioBanner />
      <BottomDecoration/>
       <PortfolioList /> 
      <StrategicBusinessProjects />
      {/* <DHAGujranwalaProjects /> */}
      <CompaniesAffiliations />
      {/* <ContactSection/> */}
    </main>
  );
};

export default Portfolio;