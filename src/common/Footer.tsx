import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { NAVIGATION_ITEMS } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white relative">
      
      <div className="max-w-[1241px] mx-auto px-6 lg:px-0 py-24">
        {/* Top Row: Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <nav className="w-full">
            <ul className="flex flex-wrap justify-center md:justify-start gap-10">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-[#D1D1D1] relative hover:text-cyan-primary transition-colors text-[18px] font-normal font-pathway"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-white mb-8" />

        {/* Bottom Row: Copyright and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#D1D1D1] text-[16px] font-pathway font-light order-2 md:order-1 text-center md:text-left">
            All rights reserved © CM Holdings | Terms and conditions apply!
          </p>

          <div className="flex gap-4 order-1 md:order-2">
            {[
              { Icon: FaFacebookF, href: "#" },
              { Icon: FaInstagram, href: "#" },
              { Icon: FaYoutube, href: "#" },
              { Icon: FaLinkedinIn, href: "#" },
              { Icon: FaTwitter, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-cyan-primary hover:scale-110 transition-all group"
              >
                <social.Icon className="text-black text-lg group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
       {/* Bottom White Parting Line */}
            <div className="absolute bottom-6 left-0 right-0 h-[0.5px] opacity-2 bg-[#00EAFF]"></div>
    </footer>
  );
};

export default Footer;