import image1 from '../assets/images/galleryImages/image1.png';
import image2 from '../assets/images/galleryImages/image2.png';
import image3 from '../assets/images/galleryImages/image3.png';
import image4 from '../assets/images/galleryImages/image4.png';
import image5 from '../assets/images/galleryImages/image5.png';
import image6 from '../assets/images/galleryImages/image6.png';
import image7 from '../assets/images/galleryImages/image7.png';
import image8 from '../assets/images/galleryImages/image8.png';
import image9 from '../assets/images/galleryImages/image9.png';

export interface GalleryItem {
    id: number;
    image: string;
    title: string;
    author: string;
    description: string;
    size?: 'large' | 'small';
}

export const GALLERY_DATA: GalleryItem[] = [
    {
        id: 1,
        image: image1,
        title: "Meeting with DCO Azmat Sahib",
        author: "Mian Mubashar",
        description: "Reconnecting with seasoned professionals to exchange thoughts on leadership and public service.",
        size: 'large'
    },
    {
        id: 2,
        image: image2,
        title: "First Heart Hospital Gujranwala",
        author: "Mian Mubashar",
        description: "Developing the first dedicated Heart Hospital in Gujranwala to bring world-class cardiac care to the city.",
        size: 'small'
    },
    {
        id: 3,
        image: image3,
        title: "Gujrat Chamber of Commerce",
        author: "Mian Mubashar",
        description: "Sharing our vision for the Trustee Network to provide equal and accessible healthcare across Pakistan.",
        size: 'small'
    },
    {
        id: 4,
        image: image4,
        title: "Greener Pakistan Initiative",
        author: "Mian Mubashar",
        description: "Collaborating with Miss Kanwal Liaquat for a sustainable future and climate action.",
        size: 'large'
    },
    {
        id: 5,
        image: image5,
        title: "Meeting Dr. Tahir Raza Bokhari",
        author: "Mian Mubashar",
        description: "Discussing the productive use of Auqaf properties to create jobs and support SMEs.",
        size: 'small'
    },
    {
        id: 6,
        image: image6,
        title: "Dinner with City Officials",
        author: "Mian Mubashar",
        description: "Dinner with SP Rana Zahid Lahore and Harris Jalil, CEO Lahore Municipality.",
        size: 'small'
    },
    {
        id: 7,
        image: image7,
        title: "Dallas Real Estate Market",
        author: "Mian Mubashar",
        description: "Exploring the dynamic Dallas real estate market and sharing insights for homebuyers.",
        size: 'large'
    },
    {
        id: 8,
        image: image8,
        title: "Flood Relief Efforts",
        author: "Mian Mubashar",
        description: "Raising funds across Gujranwala to support flood victims in Buner and Gilgit Baltistan.",
        size: 'small'
    },
    {
        id: 9,
        image: image9,
        title: "Empowering Future with SMEs",
        author: "Mian Mubashar",
        description: "Leveraging modern machinery and AI to empower entrepreneurs and strengthen Pakistan's economy.",
        size: 'small'
    }
];
