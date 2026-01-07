import React from 'react';
import { GALLERY_DATA } from '../constants/galleryData';
// import { PortfolioBanner } from '../components/portfolioBanner'; 

import BottomDecoration from '../components/BottomDecoration';

const GalleryPage = () => {
  return (
    <main className="bg-[#0A0A0A] min-h-screen font-pathway">
      {/* Use a Banner here if needed, consistent with other pages. 
           For now, I'll add a simple header section similar to CompaniesSection if PortfolioBanner isn't generic.
           However, checking Portfolio.tsx, PortfolioBanner seems specific. 
           I'll create a simple banner section for the Gallery.
       */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Events & <span className="bg-gradient-to-r from-[#00EAFF] to-[#FFFFFF] bg-clip-text text-transparent">Engagements</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Highlights of our contributions toward healthcare, sustainable development, and economic growth in Pakistan.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1A1A1A] hover:border-[#00EAFF]/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="overflow-hidden w-full h-[300px] md:h-[400px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#00EAFF] text-sm font-semibold tracking-wider uppercase border border-[#00EAFF]/30 px-3 py-1 rounded-full bg-[#00EAFF]/10 backdrop-blur-sm">
                      {item.author}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BottomDecoration />
    </main>
  );
};

export default GalleryPage;
