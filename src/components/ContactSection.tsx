
const ContactSection = () => {
    return (
        <div className="w-full bg-[#101010] py-24 px-6 md:px-12">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                {/* Heading Area */}
                <div className="w-full text-center mb-16">
                    <h1 className="font-pathway font-semibold text-[32px] md:text-[44px] leading-[134%] tracking-[-0.05em] uppercase mb-4">
                        <span className="bg-gradient-to-r from-[#00EAFF5E] from-[3%] to-[#FFFFFF] bg-clip-text text-transparent">
                            START YOUR INVESTMENT JOURNEY TODAY
                        </span>
                    </h1>
                    <p className="font-pathway text-[16px] md:text-[18px] text-white/50 font-light">
                        Talk to our advisors for property, SME, aviation, or investment opportunities.
                    </p>
                </div>

                {/* Form Area */}
                <form className="w-full max-w-[1214px] flex flex-col gap-[30px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        {/* Name */}
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-[#1A1A1A] border-white/5 rounded-lg p-5 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-cyan-primary/30 transition-all font-pathway h-[64px]"
                        />
                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-[#1A1A1A] border-white/5 rounded-lg p-5 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-cyan-primary/30 transition-all font-pathway h-[64px]"
                        />
                        {/* Phone Number */}
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full bg-[#1A1A1A] border-white/5 rounded-lg p-5 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-cyan-primary/30 transition-all font-pathway h-[64px]"
                        />
                        {/* Service Of Interest */}
                        <div className="relative">
                            <select
                                className="w-full bg-[#1A1A1A] border-white/5 rounded-lg p-5 text-white/20 focus:text-white focus:outline-none focus:ring-1 focus:ring-cyan-primary/30 transition-all font-pathway h-[64px] appearance-none cursor-pointer"
                                defaultValue=""
                            >
                                <option value="" disabled>Service Of Interest</option>
                                <option value="real-estate">Real Estate</option>
                                <option value="aviation">Aviation</option>
                                <option value="sme">SME</option>
                                <option value="investment">Investment</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        {/* Timeline */}
                        <input
                            type="text"
                            placeholder="Timeline"
                            className="w-full bg-[#1A1A1A] border-white/5 rounded-lg p-5 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-cyan-primary/30 transition-all font-pathway h-[64px]"
                        />
                        {/* Project Details */}
                        <textarea
                            placeholder="Project Details..."
                            rows={8}
                            className="w-full bg-[#1A1A1A] h-[162px] border-white/5 rounded-lg p-5 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-cyan-primary/30 transition-all font-pathway resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-2">
                        <button
                            type="submit"
                            className="w-[127px] h-[44px] flex items-center justify-center border border-[#A9A9A9] rounded-[16px] text-white font-pathway font-medium hover:bg-white/5 transition-all cursor-pointer"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;
