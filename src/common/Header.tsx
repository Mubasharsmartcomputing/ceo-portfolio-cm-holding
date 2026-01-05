import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#101010] shadow-lg' : 'bg-[#101010] lg:bg-transparent'
    }`}>
      <nav className="max-w-[1241px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-pathway font-semibold text-xl lg:text-2xl tracking-wide bg-gradient-to-r from-[#00EAFF] to-[#FFFFFF] bg-clip-text text-transparent z-50 relative"
          >
            Omer Farooq
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {NAVIGATION_ITEMS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={`text-base xl:text-lg font-medium transition-all duration-300 relative group ${
                    isActive(link.path)
                      ? 'text-cyan-primary'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-primary transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative z-50 p-2 text-white hover:text-cyan-primary transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0e2a32] shadow-2xl transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full pt-20 pb-8 px-6">
              <ul className="flex flex-col space-y-6">
                {NAVIGATION_ITEMS.map((link, index) => (
                  <li 
                    key={link.label}
                    className={`transform transition-all duration-300 delay-[${index * 50}ms] ${
                      isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                  >
                    <Link
                      to={link.path}
                      onClick={toggleMenu}
                      className={`block py-3 px-4 rounded-lg text-lg font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? 'text-cyan-primary bg-cyan-primary/10 border-l-4 border-cyan-primary'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;