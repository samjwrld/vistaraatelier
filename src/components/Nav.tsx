import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const navItems = ['Projects', 'Studio', 'Approach', 'Contact'];

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed w-full top-0 z-[60] px-4 pt-4 md:px-12 md:pt-6 pointer-events-none">
        <nav className={`pointer-events-auto w-full relative overflow-hidden rounded-[2rem] px-6 py-5 md:px-10 flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'bg-transparent' : 'glass-nav'}`}>
          {!isOpen && <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-[2rem] shadow-[inset_0_1px_12px_rgba(255,255,255,0.3),inset_0_-1px_6px_rgba(79,22,54,0.05)]"></div>}
          
          <Link to="/" className={`relative z-10 text-xl tracking-widest font-serif font-medium text-gray-900 transition-colors duration-500 shrink-0`}>VISTARA ATELIER</Link>
          <div className="relative z-10 hidden md:flex gap-10">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.15em] text-gray-500 hover:text-gray-900 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] auto after:bg-gray-900 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-[0.6s] after:ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="relative z-10 md:hidden cursor-pointer shrink-0 p-2 -mr-2 pointer-events-auto" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-8 h-8 font-light text-[#4f1636]" />
            ) : (
              <Menu className="w-8 h-8 font-light text-gray-900" />
            )}
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-white/60 backdrop-blur-[40px] border-b border-white/40 flex flex-col justify-center items-center px-6"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
             <div className="flex flex-col items-center gap-10 relative z-10">
                {navItems.map((item, i) => (
                  <motion.div
                     key={item}
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 + (i * 0.1), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                     <Link
                       to={`/${item.toLowerCase()}`}
                       className="text-3xl md:text-5xl font-serif text-[#4f1636]/80 hover:text-[#4f1636] transition-colors uppercase tracking-widest"
                     >
                       {item}
                     </Link>
                  </motion.div>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
