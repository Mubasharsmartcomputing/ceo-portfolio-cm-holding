interface DigitalInnovationProps {
    showTitle?: boolean;
    isDark?: boolean;
}

const DigitalInnovation: React.FC<DigitalInnovationProps> = ({ showTitle = true, isDark = false }) => {
    return (
        <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
            <div className="max-w-[1241px] mx-auto px-6 lg:px-0">
                {/* Section Header */}
                {showTitle && (
                    <div className="text-center mb-16 max-w-[800px] mx-auto">
                        <h2 className="font-pathway text-[36px] font-semibold uppercase mb-4 bg-gradient-to-r from-[#00EAFF] from-[37%] to-[#595858] bg-clip-text text-transparent inline-block">
                            Digital Innovation
                        </h2>
                        <p className={`font-pathway text-[16px] leading-[26px] tracking-wide ${isDark ? 'text-white/80' : 'text-[#4A4A4A]'}`}>
                            CM Holdings integrates advanced digital systems across its companies to ensure efficiency, transparency, and global-standard operations.
                        </p>
                    </div>
                )}

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Vision Card */}
                    <div className={`border border-dashed border-cyan-primary rounded-[20px] p-10 ${isDark ? 'bg-black/40' : 'bg-white'}`}>
                        <h3 className="font-pathway text-[28px] font-semibold uppercase mb-4 bg-gradient-to-r from-[#00EAFF] from-[37%] to-[#595858] bg-clip-text text-transparent inline-block">
                            My IT Vision
                        </h3>
                        <p className={`font-pathway text-[16px] leading-[26px] tracking-wide ${isDark ? 'text-white/80' : 'text-[#4A4A4A]'}`}>
                            To build secure, intelligent, and globally competitive digital systems that empower businesses, investors, and students through reliable technology, transparency, and real-time information.
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className={`border border-dashed border-cyan-primary rounded-[20px] p-10 ${isDark ? 'bg-black/40' : 'bg-white'}`}>
                        <h3 className="font-pathway text-[28px] font-semibold uppercase mb-4 bg-gradient-to-r from-[#00EAFF] from-[37%] to-[#595858] bg-clip-text text-transparent inline-block">
                            My IT Mission
                        </h3>
                        <p className={`font-pathway text-[16px] leading-[26px] tracking-wide ${isDark ? 'text-white/80' : 'text-[#4A4A4A]'}`}>
                            To leverage software engineering, data analytics, and modern automation to enhance operational efficiency, strengthen transparency, and support large-scale national development.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Cyan Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-cyan-primary"></div>
        </section>
    );
};

export default DigitalInnovation;
