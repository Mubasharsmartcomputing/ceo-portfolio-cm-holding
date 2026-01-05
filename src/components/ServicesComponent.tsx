import { servicesData } from '../constants/servicesData';
import cardLeftDesign from '../assets/images/ServicesImages/cardLeftDesign.png';

const Services = () => {
  return (
    <div className="bg-[#0A0A0A] py-20">
      <div className="max-w-[1241px] mx-auto px-6 lg:px-0">
        <div className="space-y-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`relative flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 p-6 md:p-8 rounded-[24px] ${service.hasBorder
                ? `border border-dashed ${['01', '03', '05', '07'].includes(service.id)
                  ? 'border-white'
                  : 'border-[#00EAFF]'
                }`
                : ''
                }`}
            >
              {/* Left side - Image */}
              <div className="w-full lg:w-auto flex-shrink-0 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full max-w-[400px] lg:w-[200px] h-auto lg:h-[200px] object-cover rounded-[16px]"
                />
              </div>

              {/* Right side - Content */}
              <div className="flex-1 flex flex-col justify-between text-center lg:text-left">
                {/* Service Number */}
                <div className="mb-2 text-white">
                  <span className="font-pathway text-[28px] md:text-[32px] font-bold">
                    {service.id}
                  </span>
                </div>

                {/* Service Title */}
                <div className="mb-4">
                  <h3 className="font-pathway text-[20px] md:text-[24px] font-semibold leading-tight bg-gradient-to-r from-[#00EAFF] to-[#FFFFFF] bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-pathway text-[16px] md:text-[18px] font-light text-white w-full lg:max-w-[703px] leading-relaxed mx-auto lg:mx-0">
                  {service.description}
                </p>
              </div>

              {/* Right side design element - Hidden on mobile for better readability */}
              <div className="absolute top-0 right-0 w-[100px] h-full hidden lg:flex items-center justify-center pointer-events-none">
                <img
                  src={cardLeftDesign}
                  alt=""
                  className="w-full h-auto object-contain opacity-50"
                />
              </div>

              {/* Bottom Gradient Highlight for cards 02, 04, 06 */}
              {['02', '04', '06'].includes(service.id) && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-[250px] pointer-events-none rounded-b-[24px] z-0"
                  style={{
                    background: 'linear-gradient(to top, #27494d5e 0%, #99999900 37%)'
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;