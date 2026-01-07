import aboutBg from '../assets/images/aboutSection.png';
import ceoImage from '../assets/images/ceo.png';

const AboutMeSection = () => {
    return (
        <section className="relative min-h-[800px] flex items-center py-16 md:py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-fixed bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${aboutBg})` }}
            >
                <div className="absolute inset-0 bg-[#101010]/80 backdrop-blur-[1px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1241px] mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Left side: CEO Image Container */}
                <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start">
                    <div className="relative w-full max-w-[430px]">
                        {/* Left Side: CEO Image with Arch Mask */}
                        <div className="relative flex-shrink-0">
                            <div className="w-[300px] md:w-[430px] aspect-auto rounded-t-[200px] border-b-[5px] border-cyan-primary overflow-hidden bg-gray-600/2 relative">
                                <img
                                    src={ceoImage}
                                    alt="Omer Farooq"
                                    className="w-full h-full object-cover object-top grayscale opacity-100 scale-105"
                                />
                            </div>
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
                <div className="w-full lg:w-[720px]">
                    <h3 className="font-pathway text-cyan-primary text-[24px] font-semibold leading-normal mb-4 uppercase flex items-center gap-4">
                        About Me
                    </h3>
                    <div className="font-pathway text-[#E0E0E0] text-[16px] md:text-[20px] leading-[160%] font-normal tracking-[-0.01em]">
                        <p className="whitespace-pre-line">
                          A visionary business leader and entrepreneur, recognized for strategic insight and hands-on leadership across multiple industries. With a strong focus on innovation, quality, and integrity, extensive experience has been built in managing ventures spanning business management, construction, interior and exterior design, marketing, education, consultancy, trading, import/export, aviation, and hospitality.
                          Under this leadership, several renowned brands including Empire Lifestyle, Farooq Woolen Mills, Winvest, Empire Bridge Aviation, Capital RMC, Used Global Machinery, C.M.O.F., and Wonder Hills have grown with a strong emphasis on professionalism, operational excellence, and customer satisfaction.Driven by a forward-thinking mindset, the focus remains on creating opportunities, empowering individuals, and driving sustainable economic growth building future-ready businesses that embrace innovation, excellence, and global expansion.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
