import { HiOutlineDownload } from 'react-icons/hi';
import bgImage from '../assets/images/aboutSection.png';
import ceoImage from '../assets/images/ceo.png';

const AboutBanner = () => {
    return (
        <section className="min-h-screen relative flex items-start pt-32 md:pt-40 pb-32 overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-black/85"></div>
            </div>

            <div className="container mx-auto max-w-[1241px] px-6 lg:px-0 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row lg:items-end gap-16 lg:gap-24">

                    {/* Left Side: CEO Image with Arch Mask */}
                    <div className="relative flex-shrink-0">
                        <div className="w-[300px] md:w-[430px] aspect-[1/1.2] rounded-t-[200px] border-b-[2px] border-cyan-primary overflow-hidden bg-black/40 relative">
                            <img
                                src={ceoImage}
                                alt="Omer Farooq"
                                className="w-full h-full object-cover object-top grayscale opacity-90 scale-110"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="flex-1 text-left">
                        {/* Hi I am */}
                        <p className="font-poppins text-[30.49px] font-light text-white mb-2 leading-none">
                            Hi I am
                        </p>

                        {/* Omer Farooq */}
                        <h1 className="font-pathway font-semibold text-[44px] md:text-[57.56px] uppercase mb-4 leading-tight">
                            <span className="bg-gradient-to-r from-[#00EAFF] to-[#FFFFFF] bg-clip-text text-transparent">
                                Omer Farooq
                            </span>
                        </h1>

                        <p className="font-pathway text-[20px] font-semibold text-white uppercase mb-4 tracking-wider">
                            CEO CM HOLDINGS
                        </p>

                        {/* Subheading */}
                        <h2 className="font-pathway font-light text-[24px] md:text-[28px] text-white mb-6 leading-[38px] tracking-[0.03em] max-w-[800px]">
                            Empowering Pakistan's Future Through Innovation, Investment & Global Standard Development
                        </h2>

                        {/* Main Description */}
                        <p className="font-pathway text-[16px] font-light text-white leading-[1.6] max-w-full lg:w-[745px] mb-12 tracking-[0.05em]">
                            CM Holdings Is A Diversified Business Ecosystem Leading Pakistan's Transformation Across Real Estate, Aviation, SMEs, International Education, Hospitality, Healthcare, And Lifestyle Development.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-8 font-montserrat mt-12">
                            <button className="w-full md:w-[190px] h-[44px] flex items-center justify-center border-[2px] border-white/20 rounded-[12px] text-white font-medium hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap gap-[10px]">
                                Explore Projects
                            </button>
                            <button className="w-full md:w-auto px-10 h-[44px] flex items-center justify-center border-[2px] border-cyan-primary rounded-[12px] text-cyan-primary font-medium hover:bg-cyan-primary/10 transition-all cursor-pointer whitespace-nowrap gap-[10px]">
                                <HiOutlineDownload className="text-xl" />
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>

                {/* About Me Section - Below Hero */}
                <div className="mt-20 relative z-20">
                    <h3 className="font-pathway text-[#00EAFF] text-[24px] font-semibold uppercase mb-8">
                        About Me
                    </h3>
                    <div className="font-pathway text-white/80 text-[18px] md:text-[20px] leading-[1.6] space-y-8 tracking-[-0.01em] max-w-[1100px]">
                        <p>
                            CM Holdings of Companies is a progressive, diversified conglomerate founded by Mr. Muhammad Farooq and led by CEO Mr. Omer Farooq. Built on innovation, quality, and integrity, the Group has expanded into a multi sector enterprise recognized for excellence across business management, construction, interior and exterior design, marketing, education, consultancy, trading, import/export, and hospitality.
                        </p>
                        <p>
                            Home to renowned brands such as Empire Lifestyle, Farooq Woolen Mills, Winvest, Empire Bridge Aviation, Capital RMC, Used Global Machinery, C.M.O.F., and Wonder Hills, CM Holdings continues to set industry benchmarks through professionalism and a commitment to customer satisfaction. With a strong foundation and forward thinking leadership, the Group aims to create opportunities, empower individuals, and drive sustainable economic growth moving confidently toward a future defined by innovation, excellence, and global expansion.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;