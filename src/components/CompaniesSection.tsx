import companyLogs from '../assets/images/companyLogs.png';

const CompaniesSection = () => {
    return (
        <section className="bg-[#0A0A0A] py-20 overflow-hidden">
            <div className="max-w-[1241px] mx-auto px-6 lg:px-0">
                {/* Title */}
                <h2 className="font-pathway text-[30px] md:text-[36px] font-normal text-white mb-12">
                    Companies
                </h2>

                {/* Logos Image Container */}
                <div className="flex justify-center items-center w-full">
                    <img
                        src={companyLogs}
                        alt="Partner Companies"
                        className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default CompaniesSection;
