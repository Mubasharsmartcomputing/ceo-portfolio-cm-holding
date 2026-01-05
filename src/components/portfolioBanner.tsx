
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

                    I Lead CM Holdings With A Focus On Innovation, Growth, And Strategic Expansion Across Multiple Sectors. My Mission Is To Build Impactful Businesses, Empower Teams, And Drive Sustainable Success.
                </p>
            </div>

            {/* Bottom White Parting Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-white"></div>
        </div>
    );
};

