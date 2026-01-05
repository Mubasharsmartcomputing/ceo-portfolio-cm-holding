import image1 from '../assets/images/portfolioSection/image1.png';
import image2 from '../assets/images/portfolioSection/image2.png';
import image3 from '../assets/images/portfolioSection/image3.png';
import image4 from '../assets/images/portfolioSection/image4.png';
import image5 from '../assets/images/portfolioSection/image5.png';
import image6 from '../assets/images/portfolioSection/image6.png';
import image7 from '../assets/images/portfolioSection/image7.png';

export interface PortfolioCard {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    bgColor: string;
    borderColor: string;
    hasGradient: boolean;
    hasPattern?: boolean;
}

export const PORTFOLIO_DATA: PortfolioCard[] = [
    {
        number: "01",
        title: "EMPIRE LIFESTYLE",
        subtitle: "Building The Future Brilliantly",
        description: "Empire Lifestyle is a flagship venture of CM Holdings OF COMPANIES, dedicated to redefining modern living through innovation, design, and quality craftsmanship. The company operates across interior design, lifestyle development, and housing solutions, offering a perfect blend of style and functionality.",
        image: image1,
        bgColor: "bg-[#101010]",
        borderColor: "border-[#FFFFFF]",
        hasGradient: true,
        hasPattern: true
    },
    {
        number: "02",
        title: "FAROOQ WOOLEN MILLS",
        subtitle: "Where Quality Begins And Excellence Never Ends",
        description: "Farooq Woolen Mills, a project of CM Holdings, produces premium acrylic yarns with a focus on quality, innovation, and reliability. Equipped with advanced R&D and modern machinery, we serve domestic and international markets, offering competitive pricing, exceptional service, and timely delivery. Trusted for over a decade, we are a leading producer of high-quality acrylic yarn.",
        image: image2,
        bgColor: "bg-[#1B2B30]",
        borderColor: "border-[#FFFFFF]",
        hasGradient: true
    },
    {
        number: "03",
        title: "SMERA",
        subtitle: "Small, Medium Enterprise Resource And Assistance",
        description: "SMERA, a strategic trading and business development company under CM Holdings, enhances the Group's global presence through import/export, commercial trade, and international market expansion. By connecting domestic producers with global buyers via reliable logistics, quality products, and transparent practices, SMERA drives innovation, efficiency, and strategic partnerships to expand CM Holdings' international footprint.",
        image: image3,
        bgColor: "bg-[#02C9DB]",
        borderColor: "border-[#FFFFFF]",
        hasGradient: false
    },
    {
        number: "04",
        title: "WINVEST SOLUTIONS",
        subtitle: "Smart Strategy. Strong Growth.",
        description: "Winvest, a CM Holdings initiative, is a dynamic business and investment platform fostering entrepreneurship, consultancy, and professional development. Through strategic guidance, investment support, and specialized training, it empowers startups, drives business growth, and strengthens managerial capabilities, preparing the next generation of corporate leaders.",
        image: image4,
        bgColor: "bg-[#101010]",
        borderColor: "border-[#FFFFFF]",
        hasGradient: true
    },
    {
        number: "05",
        title: "EMPIRE BRIDGE AVIATION",
        subtitle: "Where Luxury Meets Aviation Excellence",
        description: "Empire Bridge Aviation, a CM Holdings venture, specializes in trading, leasing, and chartering premium aircraft, including helicopters, airplanes, and private jets. Through a global aviation network, it delivers safe, efficient, and high-quality services, redefining luxury air travel and aviation investment while expanding CM Holdings' international presence.",
        image: image5,
        bgColor: "bg-[#1B2B30]",
        borderColor: "border-[#FFFFFF]",
        hasGradient: true
    },
    {
        number: "06",
        title: "CAPITAL RMC PVT. LTD",
        subtitle: "Where Real Estate Meets Real Transparency",
        description: "Capital RMC, a leading real estate management company in Pakistan, specializes in REIT-backed and investor-driven projects. By combining thorough due diligence, strong governance, and clear documentation, it connects prime assets with credible investors, delivering secure returns, risk mitigation, and long-term value across commercial, residential, and mixed-use developments.",
        image: image6,
        bgColor: "bg-[#02C9DB]",
        borderColor: "border-[#00EAFF]",
        hasGradient: false
    },
    {
        number: "07",
        title: "USED GLOBAL MACHINERY",
        subtitle: "Reliable Machinery, Real Value",
        description: "Used Global Machinery, a CM Holdings venture, supplies certified pre-owned industrial and commercial machinery from trusted international markets. By refurbishing each machine for optimal performance, it offers cost-effective, reliable solutions that enhance efficiency, support industrial growth, and promote sustainability.",
        image: image7,
        bgColor: "bg-[#101010]",
        borderColor: "border-[#FFFFFF]",
        hasGradient: true
    }
];
