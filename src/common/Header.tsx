import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
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
      isScrolled ? 'bg-[#101010]/95 backdrop-blur-md' : 'bg-transparent md:bg-transparent bg-[#101010]/95'
    }`}>
      <nav className="max-w-[1241px] mx-auto px-6 md:px-0 py-10 font-pathway text-[18px]">
        <div className="flex justify-end items-center">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-12">
            {NAVIGATION_ITEMS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={`text-[18px] font-medium transition-all duration-300 ${isActive(link.path)
                    ? 'text-cyan-primary scale-105'
                    : 'text-white/70 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon - Visible only on mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white text-4xl p-2 transition-transform active:scale-95"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX className="text-cyan-primary" /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed inset-0 z-[100] bg-[#0e2a32]/95 backdrop-blur-md transition-all duration-500 ease-in-out md:hidden ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
            }`}
        >
          <div className="flex flex-col h-full p-10">
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="text-white text-5xl p-2 transition-all hover:rotate-90 active:scale-90"
              >
                <HiX className="text-cyan-primary" />
              </button>
            </div>

            <ul className="flex flex-col items-center justify-center flex-1 space-y-10">
              {NAVIGATION_ITEMS.map((link, index) => (
                <li
                  key={link.label}
                  className={`transition-all duration-500 delay-[${index * 100}ms] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-semibold tracking-wide text-center transition-colors ${isActive(link.path)
                      ? 'text-cyan-primary'
                      : 'text-white'
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;