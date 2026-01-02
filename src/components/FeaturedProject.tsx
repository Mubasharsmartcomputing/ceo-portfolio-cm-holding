import { LuCalendar, LuMonitor, LuPenTool, LuTrendingUp } from 'react-icons/lu';

const FeaturedProject = () => {
    const cardFeatures = [
        {
            icon: <LuCalendar className="text-cyan-primary text-xl" />,
            title: "International Design",
            text: "Crafted by a globally renowned architectural firm for a world class commercial experience."
        },
        {
            icon: <LuMonitor className="text-cyan-primary text-xl" />,
            title: "Prime Location",
            text: "Strategically positioned on Main GT Road for maximum visibility and commercial value."
        },
        {
            icon: <LuPenTool className="text-cyan-primary text-xl" />,
            title: "Engineering Excellence",
            text: "Developed with CM Holdings' expert planning and engineering teams for superior build quality."
        },
        {
            icon: <LuTrendingUp className="text-cyan-primary text-xl" />,
            title: "Investment Growth",
            text: "Designed to deliver long-term commercial returns and high-value business opportunities."
        }
    ];

    return (
        <section className="bg-[#0A0A0A] py-24 overflow-hidden">
            <div className="max-w-[1241px] mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                {/* Left side: Heading and Description */}
                <div className="w-full lg:w-[570px]">
                    <h2 className="font-pathway leading-[1.2] md:leading-[1.4] mb-8">
                        <span className="block text-[44px] font-semibold uppercase bg-gradient-to-r from-[#00EAFF5E] from-[37%] to-[#FFFFFF] bg-clip-text text-transparent">
                            Featured Mega Project
                        </span>
                        <span className="block text-[44px] font-semibold text-white uppercase mt-4">
                            The CM Centre (100 Kanals)
                        </span>
                    </h2>
                    <p className="font-pathway text-[20px] font-normal text-[#EBEBEB] leading-relaxed w-full lg:w-[564px]">
                        A landmark commercial hub being developed on Main GT Road, Gujranwala designed by an international architectural firm in collaboration with CM Holding's engineering & planning team.
                    </p>
                </div>

                {/* Right side: Cards Grid */}
                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                    {cardFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-[15px] p-6 flex flex-col items-start gap-4 transition-transform hover:-translate-y-1 duration-300 ${index % 2 !== 0 ? 'lg:mt-12' : ''
                                }`}
                        >
                            <div className="w-12 h-12 rounded-lg border border-cyan-primary/20 flex items-center justify-center bg-cyan-primary/5">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="font-pathway text-[18px] font-bold text-black mb-2">
                                    {feature.title}
                                </h3>
                                <p className="font-pathway text-[14px] text-black/60 leading-normal">
                                    {feature.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProject;
