import React from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative z-20 w-full max-w-[1800px] mx-auto px-6 md:px-12 pb-8 mt-24 flex flex-col gap-8">
      {/* Glassmorphic Container matching the design */}
      <div className="w-full relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/85 via-white/70 to-white/50 backdrop-blur-[20px] border border-white/60 shadow-[0_8px_40px_rgba(79,22,54,0.03)] p-8 md:p-14 lg:p-16">
        
        {/* Extreme subtle inner highlight for premium glass effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-[2.5rem] shadow-[inset_0_1px_12px_rgba(255,255,255,0.6),inset_0_-1px_6px_rgba(79,22,54,0.01)]"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8 text-center md:text-left">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h4 className="text-xl font-serif text-gray-900 leading-none">
              <span className="font-bold tracking-tight text-xl">VA</span><span className="text-[10px] uppercase font-sans tracking-[0.2em] text-gray-500 ml-4 inline-block align-middle pb-1 border-b border-gray-200">Vistara Atelier</span>
            </h4>
            <p className="text-[11px] font-sans text-gray-500 leading-relaxed max-w-[200px] mt-2">
              An architecture and interior design studio based in Hyderabad, crafting timeless spaces across India.
            </p>
            <div className="flex gap-5 mt-4 md:mt-auto pt-6 text-gray-800">
               <a href="#" className="hover:text-black transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"><Instagram className="w-4 h-4" /></a>
               <a href="#" className="hover:text-black transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"><Twitter className="w-4 h-4 text-gray-900 fill-current" /></a>
               <a href="#" className="hover:text-black transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"><Linkedin className="w-4 h-4 text-gray-900 fill-current" /></a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-6 lg:pl-10">
            <h5 className="text-[10px] uppercase tracking-[0.15em] font-sans font-semibold text-gray-900 mb-1">Navigation</h5>
            <ul className="flex flex-col gap-4 text-xs font-sans text-gray-600">
               <li><Link to="/projects" className="relative group/link inline-block transition-colors duration-500 hover:text-black"><span className="relative z-10">Projects</span><span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-black origin-right scale-x-0 group-hover/link:origin-left group-hover/link:scale-x-100 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)]"></span></Link></li>
               <li><Link to="/studio" className="relative group/link inline-block transition-colors duration-500 hover:text-black"><span className="relative z-10">Studio</span><span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-black origin-right scale-x-0 group-hover/link:origin-left group-hover/link:scale-x-100 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)]"></span></Link></li>
               <li><Link to="/approach" className="relative group/link inline-block transition-colors duration-500 hover:text-black"><span className="relative z-10">Approach</span><span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-black origin-right scale-x-0 group-hover/link:origin-left group-hover/link:scale-x-100 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)]"></span></Link></li>
               <li><Link to="/" className="relative group/link inline-block transition-colors duration-500 hover:text-black"><span className="relative z-10">Journal</span><span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-black origin-right scale-x-0 group-hover/link:origin-left group-hover/link:scale-x-100 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)]"></span></Link></li>
               <li><Link to="/contact" className="relative group/link inline-block transition-colors duration-500 hover:text-black"><span className="relative z-10">Contact</span><span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-black origin-right scale-x-0 group-hover/link:origin-left group-hover/link:scale-x-100 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)]"></span></Link></li>
            </ul>
          </div>

          {/* Studio Contact Column */}
          <div className="flex flex-col gap-6">
            <h5 className="text-[10px] uppercase tracking-[0.15em] font-sans font-semibold text-gray-900 mb-1">Studio</h5>
            <ul className="flex flex-col gap-5 text-[11.5px] font-sans text-gray-600">
               <li className="flex items-start gap-4">
                  <MapPin className="w-[16px] h-[16px] text-gray-500 shrink-0 stroke-[1.5] mt-0.5" />
                  <span>Jubilee Hills, Road No. 36<br/>Hyderabad 500033<br/>India</span>
               </li>
               <li className="flex items-center gap-4">
                  <Phone className="w-[16px] h-[16px] text-gray-500 shrink-0 stroke-[1.5]" />
                  <span>+91 40 2345 6789</span>
               </li>
               <li className="flex items-center gap-4 group">
                  <Mail className="w-[16px] h-[16px] text-gray-500 shrink-0 stroke-[1.5] group-hover:text-black transition-colors" />
                  <a href="mailto:studio@vistaraatelier.com" className="group-hover:text-black transition-colors">hello@vistaraatelier.com</a>
               </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h5 className="text-[10px] uppercase tracking-[0.15em] font-sans font-semibold text-gray-900 mb-1">Newsletter</h5>
            <p className="text-xs font-sans text-gray-500 max-w-[200px] leading-relaxed">
              Stay updated with our latest projects and insights.
            </p>
            <div className="mt-4 flex items-center bg-black/[0.03] rounded-lg p-1.5 border border-white/50 hover:border-white transition-colors shadow-[inset_0_2px_4px_rgba(79,22,54,0.02)] w-full max-w-sm">
              <input type="email" placeholder="Your email address" className="w-full bg-transparent outline-none text-gray-800 placeholder:text-gray-400 text-xs px-3 py-2 font-sans transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <button className="pr-3 text-gray-400 hover:text-black transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0"><ArrowRight className="w-4 h-4 stroke-[1.5]" /></button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar - Outside the glass container */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] font-sans text-gray-500 px-4 mt-6">
          <p>&copy; 2026 Vistara Atelier. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">
             Hand Crafted by <a href="https://boldblank.com" target="_blank" rel="noopener noreferrer" className="text-[#800000] hover:opacity-80 transition-opacity font-medium inline-block">BoldBlank</a>
          </p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
          </div>
      </div>
    </footer>
  );
};
