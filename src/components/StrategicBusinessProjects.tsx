import { STRATEGIC_PROJECTS_DATA } from '../constants/strategicProjectsData';

const StrategicBusinessProjects = () => {
    return (
        <section className="w-full">
            {/* <div className="bg-white">
  <div className="py-20">
    <div className="container mx-auto max-w-[1241px] px-6 lg:px-0">


      <div className="w-full h-[1px] bg-[#02C9DB] mb-10"></div>

    
      <h2 className="font-pathway font-semibold text-[20px] sm:text-[24px] md:text-[31.09px] uppercase flex flex-wrap items-center gap-2 sm:gap-4">
        <span className="text-[#595858]">≫≫</span>
        <span className="text-[#02C9DB]">STRATEGIC BUSINESS</span>
        <span className="text-[#595858]">PROJECTS</span>
      </h2>

      
      <div className="w-full h-[1px] bg-[#02C9DB] mt-10"></div>

    </div>
  </div>
</div> */}


            {/* Project Cards */}
            {STRATEGIC_PROJECTS_DATA.map((card, index) => (
                <div
                    key={index}
                    className={`relative w-full py-20 md:py-20 ${card.bgColor} overflow-hidden border-b-[1px] border-[#00EAFF] border-opacity-20`}
                >
                    <div className="container mx-auto max-w-[1241px] px-6 lg:px-0 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                            {/* Content Side */}
                            <div className="flex-1">
                                <h2 className="font-pathway font-semibold text-[31.09px] flex items-center gap-4 mb-1">
                                    <div className="w-[50px] h-[50px] flex-shrink-0 flex items-center justify-center">
                                        <img
                                            src={card.icon}
                                            alt={`${card.title} icon`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    {card.hasGradient ? (
                                        <span className="bg-gradient-to-r from-[#00EAFF] to-[#FFFFFF] bg-clip-text text-transparent">
                                            {card.title}
                                        </span>
                                    ) : (
                                        <span className="text-white">
                                            {card.title}
                                        </span>
                                    )}
                                </h2>

                                {card.subtitle && (
                                    <h3 className="font-pathway font-light text-[20.21px] text-white leading-[134%] tracking-[0.02em] mb-6">
                                        {card.subtitle}
                                    </h3>
                                )}

                                <p className="font-pathway font-light text-[15.54px] text-[#EBEBEB] leading-[141%] lg:max-w-[652px]">
                                    {card.description}
                                </p>
                            </div>

                            {/* Image Side */}
                            <div className="w-full lg:w-[420px] flex-shrink-0">
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

export default StrategicBusinessProjects;
