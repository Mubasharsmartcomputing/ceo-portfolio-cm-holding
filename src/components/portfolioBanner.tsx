import { HiOutlineDownload } from 'react-icons/hi';

export const PortfolioBanner = () => {
    return (
        <div className="min-h-[400px] relative flex items-center justify-start bg-gradient-to-r  from-[#0e2a32]
  via-[#101010] via-[60%]
  to-[#101010] overflow-hidden">

            <div className="pt-40 relative z-10 w-full max-w-[1241px] mx-auto px-6 lg:px-0">
               

                {/* Omer Farooq */}
                <h1 className="font-pathway font-medium text-[40px] md:text-[56.56px] md:font-medium uppercase mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-[#00EAFF5E] from-[37%] to-[#FFFFFF] bg-clip-text text-transparent">
                        Portfolio
                    </span>
                </h1>

            
                {/* CM Holdings is... */}
                <p className="font-pathway text-[20px] font-light text-white leading-[32px] tracking-[0.03em] max-w-full lg:max-w-[1000px] mb-12">
                    
                    I lead CM Holdings with a focus on innovation, growth, and strategic expansion across multiple sectors. My mission is to build impactful businesses, empower teams, and drive sustainable success.
                    </p>
            </div>

        </div>
    );
};

