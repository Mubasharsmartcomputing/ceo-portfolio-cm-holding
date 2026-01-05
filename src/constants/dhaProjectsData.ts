import image1 from '../assets/images/portfolioSection/dhaGujranwala/image1.png';
import image2 from '../assets/images/portfolioSection/dhaGujranwala/image2.png';
import image3 from '../assets/images/portfolioSection/dhaGujranwala/image3.png';

export interface DHAProject {
    title: string;
    description: string;
    image: string;
}

export const DHA_PROJECTS_DATA: DHAProject[] = [
    {
        title: "DHA GUJRANWALA 10 MARLA RESIDENTIAL INSTALLMENT PLOT",
        description: "A 10 Marla residential plot (J3-328) in DHA Gujranwala is available on easy installments. Managed by Empire Developers under CM Holdings, it offers a secure, modern, and high-value living and investment opportunity, reflecting quality, transparency, and customer commitment.",
        image: image1
    },
    {
        title: "DHA GUJRANWALA 5 MARLA RESIDENTIAL INSTALLMENT PLOT",
        description: "DHA Gujranwala offers 5 Marla residential and commercial plots, ideal for modern living and strong investment returns. Supported by CM Holdings, it features superior planning, secure infrastructure, and quality amenities, providing lasting value and prestige in the city's real estate market.",
        image: image2
    },
    {
        title: "DHA GUJRANWALA 148 COMMERCIAL PLOT",
        description: "The 148 Commercial Plot in DHA Gujranwala, a CM Holdings project, offers a prime investment opportunity for offices, showrooms, and retail ventures. Located in a prestigious, fast-growing area with strong visibility and modern infrastructure, it ensures long-term commercial success.",
        image: image3
    }
];
