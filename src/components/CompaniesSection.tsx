import { COMPANIES_DATA } from '../constants/companiesData';

const CompaniesSection = () => {
    return (
        <section className="bg-[#0A0A0A] py-12 md:py-20 overflow-hidden">
            <div className="container mx-auto max-w-[1241px] px-6 lg:px-0 text-center mb-16">
                <h2 className="font-pathway font-normal text-[24px] md:text-[36px] text-white/80 mb-4">
                    Companies
                </h2>
                <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                    Overseeing A Diverse Group Of Companies With A Commitment To Excellence, Efficiency, And Sustainable Expansion.
                </p>
            </div>

            {/* Logo Slider Container */}
            <div className="relative flex overflow-hidden">
                <div className="flex animate-marquee-reverse whitespace-nowrap gap-8">
                    {/* First set of logos */}
                    <div className="flex shrink-0 items-center gap-4">
                        {COMPANIES_DATA.map((item, index) => (
                            <div
                                key={`set1-${index}`}
                                className="flex items-center justify-center shrink-0 w-[100px] md:w-[140px]"
                            >
                                <div className="w-full aspect-square flex items-center justify-center group">
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Second set of logos (identical) */}
                    <div className="flex shrink-0 items-center gap-4">
                        {COMPANIES_DATA.map((item, index) => (
                            <div
                                key={`set2-${index}`}
                                className="flex items-center justify-center shrink-0 w-[100px] md:w-[140px]"
                            >
                                <div className="w-full aspect-square flex items-center justify-center group">
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompaniesSection;

