import { AFFILIATIONS_DATA } from '../constants/affiliationsData';

const CompaniesAffiliations = () => {

    return (
        <section className="w-full relative bg-white py-20 overflow-hidden">
            <div className="container mx-auto max-w-[1241px] px-6 lg:px-0 text-center mb-16">
                <h2 className="font-pathway font-semibold text-[32px] md:text-[48px] uppercase bg-gradient-to-r from-[#00EAFF] to-[#595858] bg-clip-text text-transparent">
                    COMPANIES AFFILIATIONS
                </h2>
            </div>

            {/* Logo Slider Container */}
            <div className="relative flex overflow-hidden">
                <div className="flex animate-marquee-reverse whitespace-nowrap">
                    {/* First set of logos */}
                    <div className="flex shrink-0 items-center justify-around min-w-full">
                        {AFFILIATIONS_DATA.map((item, index) => (
                            <div
                                key={`set1-${index}`}
                                className="flex items-center justify-center px-12 shrink-0"
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="h-16 md:h-20 w-auto object-contain transition-opacity hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Second set of logos (identical) */}
                    <div className="flex shrink-0 items-center justify-around min-w-full">
                        {AFFILIATIONS_DATA.map((item, index) => (
                            <div
                                key={`set2-${index}`}
                                className="flex items-center justify-center px-6 shrink-0"
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="h-16 md:h-20 w-auto object-contain transition-opacity hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Bottom Gradient Highlight */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[70px] pointer-events-none z-0"
                    style={{
                        background: 'linear-gradient(to top, #00EAFF5E 0%, #99999900 37%)'
                    }}
                />
        </section>
    );
};

export default CompaniesAffiliations;
