import image1 from '../assets/images/portfolioSection/strategicBussiness/image1.png';
import image2 from '../assets/images/portfolioSection/strategicBussiness/image2.png';
import image3 from '../assets/images/portfolioSection/strategicBussiness/image3.png';
import image4 from '../assets/images/portfolioSection/strategicBussiness/image4.png';
import image5 from '../assets/images/portfolioSection/strategicBussiness/image5.png';
import image6 from '../assets/images/portfolioSection/strategicBussiness/image6.png';

import icon1 from '../assets/icons/BussinessEcoIcon/image1.png';
import icon2 from '../assets/icons/BussinessEcoIcon/image2.png';
import icon3 from '../assets/icons/BussinessEcoIcon/image3.png';
import icon4 from '../assets/icons/BussinessEcoIcon/image4.png';
import icon5 from '../assets/icons/BussinessEcoIcon/image5.png';
import icon6 from '../assets/icons/BussinessEcoIcon/image6.png';


export interface StrategicProject {
    number: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    icon: string;
    bgColor: string;
    borderColor: string;
    hasGradient: boolean;
}

export const STRATEGIC_PROJECTS_DATA: StrategicProject[] = [
    {
        number: "01",
        title: "TIM HORTONS CAFE",
        subtitle: "Where Community Meets Great Taste",
        description: "Tim Hortons Cafe Rahwali, part of Empire Lifestyle Projects by CM Holdings in Gujranwala, Pakistan, offers a modern ambiance, premium food, and exceptional service. Designed as a hub for youth, families, and professionals, it redefines cafe culture while reflecting CM Holdings' commitment to innovation, community engagement, and excellence in food and cafe management.",
        image: image1,
        icon: icon1,
        bgColor: "bg-[#02C9DB]",
        borderColor: "border-[#FFFFFF]",
        hasGradient: false
    },
    {
        number: "02",
        title: "HARDEE'S",
        subtitle: "Bite Into Bold Flavor",
        description: "Hardee's Restaurant, part of Empire Lifestyle by CM Holdings, delivers premium-quality burgers and freshly prepared meals with international standards of taste, hygiene, and service. Offering a modern, inviting environment, it caters to families, students, and professionals, reflecting CM Holdings' commitment to quality, customer satisfaction, and lifestyle innovation while expanding its presence in Pakistan.",
        image: image2,
        icon: icon2,
        bgColor: "bg-[#2C2C2C]",
        borderColor: "border-[#FFFFFF]",
        hasGradient: true
    },
    {
        number: "03",
        title: "MEHAR COLONY HOUSING PROJECT",
        description: "CM Holdings has actively contributed to the development of Mehar Colony through multiple residential projects, enhancing living standards and local infrastructure. Focused on comfort, security, and essential amenities, our initiatives improve roads, green spaces, and utilities. CM Holdings continues to promote smart, sustainable development, creating long term value for residents and investors alike.",
        image: image3,
        icon: icon3,
        bgColor: "bg-[#1B2B30]",
        borderColor: "border-[#FFFFFF]",
        hasGradient: true
    },
    {
        number: "04",
        title: "RADIALA GUJRANWALA PROPERTY",
        description: "The Radiala Property in Gujranwala, a prime CM Holdings asset, comprises four kanals of strategically located commercial land. With excellent accessibility, strong infrastructure, and rising market value, it offers significant potential for rental income and long-term growth, positioning itself as a future commercial hub for businesses and investors.",
        image: image4,
        icon: icon4,
        bgColor: "bg-[#02C9DB]",
        borderColor: "border-[#FFFFFF]",
        hasGradient: false
    },
    {
        number: "05",
        title: "JANDIALA COMMERCIAL PROPERTY",
        description: "Jandiala Commercial Property, a strategic CM Holdings development, offers prime plots for shops, offices, and showrooms in a rapidly growing region. With excellent accessibility, strong location advantages, and high commercial growth potential, it provides an attractive long-term investment while reflecting CM Holdings' commitment to quality infrastructure and sustainable regional development.",
        image: image5,
        icon: icon5,
        bgColor: "bg-[#2C2C2C]",
        borderColor: "border-[#FFFFFF]",
        hasGradient: true
    },
    {
        number: "06",
        title: "KOT SHAHAN COMMERCIAL PROPERTY",
        description: "Kot Shahan Commercial Property, a flagship CM Holdings project, spans 100 kanals of prime commercial land for rentals, business setups, and long-term investment. Strategically located in a rapidly developing zone, it offers excellent accessibility, strong infrastructure, and significant potential for industrial and commercial growth, symbolizing opportunity and sustainable expansion.",
        image: image6,
        icon: icon6,
        bgColor: "bg-[#1B2B30]",
        borderColor: "border-[#FFFFFF]",
        hasGradient: true
    }
];
