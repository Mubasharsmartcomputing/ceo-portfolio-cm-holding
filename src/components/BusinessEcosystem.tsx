const BusinessEcosystem = () => {
    const ecosystemItems = [
        "A Powerful, Multi Sector Group Shaping The Future Of Pakistan:",
        "Empire Lifestyle Verified Real Estate, Commercial Development & Hospitality Brands.",
        "CM Holdings Introduction Update",
        "Capital RMC Pakistan's First SECP Registered Real Estate Management Company In Gujranwala.",
        "Winvest Solutions Investment Advisory, Feasibility Studies & International Sourcing.",
        "SMERA SME Modernization Through Advanced Machinery And Industrial Support.",
        "Used Global Machinery Import & Trading Of Medical, Industrial & Commercial Machinery.",
        "Empire Bridge Aviation Global Aviation Brokerage For Jets, Helicopters & Luxury Assets.",
        "Wonderhill Visa Consultancy Student Visas, Immigration Support & Global Education Advisory.",
        "Space Paddle Club Premium Sports & Lifestyle Recreation Brand.",
        "Trustee Hospitals Nonprofit, Research Driven Healthcare For Cancer & Chronic Diseases."
    ];

    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="max-w-[1241px] mx-auto px-6 lg:px-0">
                {/* Heading */}
                <h2 className="font-pathway text-[36px] font-semibold uppercase mb-6 bg-gradient-to-r from-[#00EAFF] from-[37%] to-[#595858] bg-clip-text text-transparent w-fit">
                    Our Business Ecosystem
                </h2>

                {/* Ecosystem List */}
                <div className="relative pl-8 border-l-[1px] border-[#00EAFF]" style={{
                    background: 'linear-gradient(to right, #d7eaf05e 37%, #FFFFFF00)'
                }}>
                    <ul className="space-y-2 py-6">
                        {ecosystemItems.map((item, index) => (
                            <li
                                key={index}
                                className="font-pathway text-[16px] font-normal text-[#1A1A1A] leading-[26px] tracking-[0.05em] flex items-start gap-3"
                            >
                                <span className="mt-[11px] w-[5px] h-[5px] rounded-full  bg-[#1A1A1A] flex-shrink-0"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Bottom Cyan Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-cyan-primary"></div>
        </section>
    );
};

export default BusinessEcosystem;
