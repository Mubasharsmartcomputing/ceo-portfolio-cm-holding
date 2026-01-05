import { PORTFOLIO_DATA } from '../constants/portfolioData';

const PortfolioList = () => {
    return (
        <section className="w-full">
            {PORTFOLIO_DATA.map((card, index) => (
                <div
                    key={index}
                    className={`relative w-full py-20 md:py-20 border-b ${card.borderColor} ${card.bgColor} overflow-hidden`}
                >

                    <div className="container mx-auto max-w-[1241px] px-6 lg:px-0 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                            {/* Content Side */}
                            <div className="flex-1">
                                <h2 className="font-pathway font-semibold text-[31.09px] flex items-center gap-4 mb-1">
                                    <span className="text-white">{card.number}</span>
                                    {card.hasGradient || card.number === "01" ? (
                                        <span className="bg-gradient-to-r from-[#00EAFF] to-[#FFFFFF] bg-clip-text text-transparent">
                                            {card.title}
                                        </span>
                                    ) : (
                                        <span className="text-white">
                                            {card.title}
                                        </span>
                                    )}
                                </h2>

                                <h3 className="font-pathway font-light text-[20.21px] text-white leading-[134%] tracking-[0.02em] mb-6">
                                    {card.subtitle}
                                </h3>

                                <p className="font-pathway font-light text-[15.54px] text-[#EBEBEB] leading-[141%] lg:max-w-[652px]">
                                    {card.description}
                                </p>
                            </div>

                            {/* Image Side */}
                            <div className="w-full lg:w-[380px] flex-shrink-0">
                                <div
                                    className="overflow-hidden border border-[#FFFFFF] shadow-2xl"
                                    style={{
                                        borderRadius: '36.59px',
                                        height: '270px'
                                    }}
                                >
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default PortfolioList;
