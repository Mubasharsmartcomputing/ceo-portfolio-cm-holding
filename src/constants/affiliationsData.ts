import image1 from '../assets/images/portfolioSection/companiesAffiliations/image1.png';
import image2 from '../assets/images/portfolioSection/companiesAffiliations/image2.png';
import image3 from '../assets/images/portfolioSection/companiesAffiliations/image3.png';
import image4 from '../assets/images/portfolioSection/companiesAffiliations/image4.png';
import image5 from '../assets/images/portfolioSection/companiesAffiliations/image5.png';
import image6 from '../assets/images/portfolioSection/companiesAffiliations/image6.png';
import image7 from '../assets/images/portfolioSection/companiesAffiliations/image7.png';
import image8 from '../assets/images/portfolioSection/companiesAffiliations/image8.png';
import image9 from '../assets/images/portfolioSection/companiesAffiliations/image9.png';
import image10 from '../assets/images/portfolioSection/companiesAffiliations/image10.png';

export interface Affiliation {
    image: string;
    alt: string;
}

export const AFFILIATIONS_DATA: Affiliation[] = [
    { image: image1, alt: "Tim Hortons" },
    { image: image2, alt: "ARY Laguna" },
    { image: image3, alt: "DHA Gujranwala" },
    { image: image4, alt: "CGBM" },
    { image: image5, alt: "Apex Group" },
    { image: image6, alt: "Vital Group" },
    { image: image7, alt: "Nestle" },
    { image: image8, alt: "Kips" },
    { image: image9, alt: "Zameen" },
    { image: image10, alt: "Pepsi" }
];
