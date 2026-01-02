import dollerIcon from '../assets/icons/whyWeChoose/dolller.svg';
import bulbIcon from '../assets/icons/whyWeChoose/bulb.svg';
import globalIcon from '../assets/icons/whyWeChoose/global.svg';
import supportIcon from '../assets/icons/whyWeChoose/support.svg';

const WhyChooseSection = () => {
    const features = [
        {
            icon: <img src={dollerIcon} alt="Verified Investments" className="w-8 h-8 object-contain" />,
            title: "VERIFIED INVESTMENTS",
            text: "All properties and projects are fully authenticated with strict documentation and transparency."
        },
        {
            icon: <img src={bulbIcon} alt="Regulated Management" className="w-8 h-8 object-contain" />,
            title: "REGULATED MANAGEMENT",
            text: "Backed by SECP-compliant real estate governance through Capital RMC."
        },
        {
            icon: <img src={globalIcon} alt="Global Standards" className="w-8 h-8 object-contain" />,
            title: "GLOBAL STANDARDS",
            text: "International partners and world-class development practices across every sector."
        },
        {
            icon: <img src={supportIcon} alt="Complete Advisory" className="w-8 h-8 object-contain" />,
            title: "COMPLETE ADVISORY",
            text: "End-to-end support for investors, businesses, students, and corporate clients."
        }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-br from-[#00EAFF5E] from-[37%] to-[#FFFFFF]">
            <div className="max-w-[1214px] mx-auto bg-[#101010E0] rounded-[32px] p-12 md:p-20 shadow-2xl overflow-hidden backdrop-blur-md">
                <div className="mb-16">
                    <h2 className="font-pathway text-[36px] md:text-[47.01px] font-normal uppercase leading-tight tracking-[-0.05em] mb-4">
                        <span className="bg-gradient-to-r from-[#00EAFF5E] from-[37%] to-[#FFFFFF] bg-clip-text text-transparent">
                            Why Choose
                        </span>{" "}
                        <span className="text-white">CM Holdings</span>
                    </h2>
                    <p className="font-pathway text-[16px] text-white/60 tracking-wide">
                        E-commerce stores, startups or marketing agencies with many accounts... Basically
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative w-full lg:w-[247.96px] bg-[#FFFFFF1A] border border-white/10 rounded-[18px] p-8 pt-10 flex flex-col items-start gap-4 transition-all hover:border-cyan-primary/30 group mt-4"
                        >
                            {/* Icon Wrapper - Positioned to overlap top-left */}
                            <div className="absolute -top-6 left-6 w-12 h-12 rounded-[15px] bg-cyan-primary flex items-center justify-center z-10">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="font-pathway text-[22px] font-semibold leading-[134%] uppercase bg-gradient-to-r from-[#00EAFF5E] from-[37%] to-[#FFFFFF] bg-clip-text text-transparent mt-2">
                                {feature.title.split(' ')[0]} <br /> {feature.title.split(' ')[1]}
                            </h3>

                            {/* Text */}
                            <p className="font-inter text-[14px] font-normal text-[#BCC4DC] leading-relaxed">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
