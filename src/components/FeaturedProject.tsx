import { LuCalendar, LuMonitor, LuPenTool, LuTrendingUp } from 'react-icons/lu';
import { FEATURED_PROJECT_CARDS } from '../constants/featuredProjectData';

const FeaturedProject = () => {
    const iconMap = {
        LuCalendar: <LuCalendar className="text-cyan-primary text-xl" />,
        LuMonitor: <LuMonitor className="text-cyan-primary text-xl" />,
        LuPenTool: <LuPenTool className="text-cyan-primary text-xl" />,
        LuTrendingUp: <LuTrendingUp className="text-cyan-primary text-xl" />,
    };

    return (
        <section className="bg-[#0A0A0A] py-6 md:py-20 overflow-hidden">
            <div className="max-w-[1360px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Left side: Heading and Description */}
                <div className="w-full lg:w-[60%]">
                    <h2 className="font-pathway leading-[1.2] md:leading-[1.4] mb-8">
                        <span className="block text-[28px] md:text-[44px] font-semibold uppercase bg-gradient-to-r from-[#00EAFF5E] from-[37%] to-[#FFFFFF] bg-clip-text text-transparent">
                            Featured Mega Project
                        </span>
                        <span className="block text-[28px] md:text-[44px] font-semibold text-white uppercase mt-4">
                            The CM Centre (100 Kanals)
                        </span>
                    </h2>
                    <p className="font-pathway w-full lg:w-[70%] text-[18px] md:text-[20px] font-normal text-[#EBEBEB] leading-relaxed">
                        A landmark commercial hub being developed on Main GT Road, Gujranwala designed by an international architectural firm in collaboration with CM Holding's engineering & planning team.
                    </p>
                </div>

                {/* Right side: Cards Grid */}
                <div className="w-full lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 items-start">
                    {FEATURED_PROJECT_CARDS.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-[15px] p-6 flex flex-col items-start gap-4 transition-transform hover:-translate-y-1 duration-300 ${index % 2 !== 0 ? 'lg:mt-4' : ''
                                }`}
                        >
                            <div className="w-12 h-12 rounded-lg border border-cyan-primary/20 flex items-center justify-center bg-cyan-primary/5">
                                {iconMap[feature.iconName]}
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
