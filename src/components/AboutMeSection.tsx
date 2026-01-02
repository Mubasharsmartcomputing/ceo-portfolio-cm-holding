import aboutBg from '../assets/images/aboutSection.png';
import ceoImg from '../assets/images/ceo.png';

const AboutMeSection = () => {
    return (
        <section className="relative min-h-[800px] flex items-center py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-fixed bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${aboutBg})` }}
            >
                <div className="absolute inset-0 bg-[#000000]/80 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1241px] mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                {/* Left side: CEO Image Container */}
                <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start">
                    <div className="relative w-full max-w-[430px]">
                        {/* Arch Shaped Container for Image */}
                        <div>
                            <img
                                src={ceoImg}
                                alt="CEO CM Holdings"
                                className="w-full  grayscale"
                            />
                        </div>
                        {/* Name Tag below the cyan line */}
                        <div className="mt-6">
                            <p className="font-pathway text-[20px] md:text-[24px] font-medium text-cyan-primary uppercase tracking-[0.15em] mb-1">
                                CEO CM Holdings
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right side: Content */}
                <div className="w-full lg:w-[718px]">
                    <h3 className="font-pathway text-cyan-primary text-[24px] font-semibold leading-normal mb-8 uppercase flex items-center gap-4">
                        <span className="w-8 h-px bg-cyan-primary block"></span>
                        About Me
                    </h3>
                    <div className="font-pathway text-[#E0E0E0] text-[18px] md:text-[20px] leading-[158%] font-normal space-y-8 tracking-[-0.01em]">
                        <p>
                            CM Holdings of Companies is a progressive, diversified conglomerate founded by Mr. Muhammad Farooq and led by CEO Mr. Omer Farooq. Built on innovation, quality, and integrity, the Group has expanded into a multi-sector enterprise recognized for excellence across business management, construction, interior and exterior design, marketing, education, consultancy, trading, import/export, and hospitality.
                        
                       
                            Home to renowned brands such as Empire Lifestyle, Farooq Woolen Mills, Winvest, Empire Bridge Aviation, Capital RMC, Used Global Machinery, C.M.O.F., and Wonder Hills, CM Holdings continues to set industry benchmarks through professionalism and a commitment to customer satisfaction.
                        
                        
                            With a strong foundation and forward thinking leadership, the Group aims to create opportunities, empower individuals, and drive sustainable economic growth moving confidently toward a future defined by innovation, excellence, and global expansion.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
