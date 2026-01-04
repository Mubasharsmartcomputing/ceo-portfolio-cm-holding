import { servicesData } from '../constants/servicesData';
import cardLeftDesign from '../assets/images/ServicesImages/cardLeftDesign.png';

const Services = () => {
  return (
    <div className="bg-[#101010] py-20">
      <div className="max-w-[1241px] mx-auto px-6 lg:px-0">
        <div className="space-y-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`relative flex flex-col lg:flex-row items-start gap-8 p-8 rounded-[24px] ${
                service.hasBorder 
                  ? `border border-dashed ${
                      ['01', '03', '05', '07'].includes(service.id) 
                        ? 'border-white' 
                        : 'border-[#00EAFF]'
                    }` 
                  : ''
              }`}
              style={{
                borderStyle: service.hasBorder ? 'dashed' : 'none',
                borderWidth: service.hasBorder ? '1px' : '0'
              }}
            >
              {/* Left side - Image */}
              <div className="flex-shrink-0 flex items-stretch">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-[200px] h-[200px] object-cover rounded-[16px]"
                />
              </div>

              {/* Right side - Content */}
              <div className="flex-1 flex flex-col justify-between">
                {/* Service Number */}
                <div className="mb-2">
                  <span className="font-pathway text-[32px] font-bold text-white">
                    {service.id}
                  </span>
                </div>

                {/* Service Title */}
                <div className="mb-4">
                  <h3 className="font-pathway text-[24px] font-semibold leading-tight bg-gradient-to-r from-[#00EAFF] to-[#FFFFFF] bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-pathway text-[18px] font-light text-white w-[703px] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Right side design element */}
              <div className="absolute top-0 right-0 w-[100px] h-full flex items-center justify-center pointer-events-none">
                <img
                  src={cardLeftDesign}
                  alt=""
                  className="w-full h-auto object-contain opacity-50"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;