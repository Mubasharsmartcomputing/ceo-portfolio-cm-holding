import { DHA_PROJECTS_DATA } from '../constants/dhaProjectsData';

const DHAGujranwalaProjects = () => {
    return (
        <section className="w-full bg-white pt-24 pb-24">
            <div className="container mx-auto max-w-[1241px] px-6 lg:px-0">

                {/* HEADING SECTION */}
                <div className="max-w-[682px] mb-16">
                    <h2 className="font-pathway font-semibold text-[31.09px] leading-[134%] tracking-[-0.05em] uppercase">
                        <span className="text-[#00C6D8]">07 DHA GUJRANWALA </span>
                        <span className="bg-gradient-to-r from-[#00C6D8] to-[#858585] bg-clip-text text-transparent">
                            COMMERCIAL & RESIDENTIAL PROPERTIES
                        </span>
                    </h2>
                </div>

                {/* 3-COLUMN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {DHA_PROJECTS_DATA.map((project, index) => (
                        <div key={index} className="flex flex-col">
                            {/* IMAGE CONTAINER */}
                            <div
                                className="overflow-hidden border border-[#FFFFFF] shadow-2xl mb-6 flex-shrink-0"
                                style={{
                                    borderRadius: '36.59px',
                                    width: '242.96px',
                                    height: '234.14px'
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* PARAGRAPH */}
                            <div className="w-[363px] max-w-full">
                                <p className="font-pathway font-normal text-[14px] text-[#4A4A4A] leading-[141%]">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default DHAGujranwalaProjects;
