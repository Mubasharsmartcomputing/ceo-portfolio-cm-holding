import { HiOutlineDownload } from 'react-icons/hi';

const HomeBanner = () => {
    return (
        <div className="min-h-[603px] relative flex items-center justify-start bg-gradient-to-r   from-[#0e2a32]
  via-[#101010] via-[60%]
  to-[#101010] overflow-hidden">

            <div className="  relative z-10 w-full max-w-[1241px] mx-auto px-6 lg:px-0">
                {/* Hi I am */}
                <p className="font-poppins text-[24px] md:text-[30px] font-normal md:font-light text-white mb-2">
                    Hi I am
                </p>

                {/* Omer Farooq */}
                <h1 className="font-pathway font-bold text-[40px] md:text-[57.56px] md:font-semibold uppercase mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-[#00EAFF5E] from-[37%] to-[#FFFFFF] bg-clip-text text-transparent">
                        Omer Farooq
                    </span>
                </h1>

                {/* Empowering... */}
                <h2 className="font-pathway font-light text-[24px] md:text-[32px] text-white mb-6 leading-tight max-w-full md:max-w-[883px]">
                    Empowering Pakistan's Future Through Innovation, Investment & Global Standard Development
                </h2>

                {/* CM Holdings is... */}
                <p className="font-pathway text-[14px] md:text-[16px] font-normal md:font-light text-white leading-relaxed max-w-full md:max-w-[700px] mb-12">
                    CM Holdings Is A Diversified Business Ecosystem Leading Pakistan's Transformation Across Real Estate, Aviation, SMEs, International Education, Hospitality, Healthcare, And Lifestyle Development.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-12 font-montserrat">
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
    );
};

export default HomeBanner;