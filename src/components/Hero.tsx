import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

const TITLE_STATEMENTS = [
  <React.Fragment key="1">Shaping <span className="italic font-light text-gray-500">Spatial</span> <br className="hidden md:block" /> Experience.</React.Fragment>,
  <React.Fragment key="2">Crafting <span className="italic font-light text-gray-500">Enduring</span> <br className="hidden md:block" /> Narratives.</React.Fragment>,
  <React.Fragment key="3">Designing <span className="italic font-light text-gray-500">Timeless</span> <br className="hidden md:block" /> Environments.</React.Fragment>
];

export const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms for the images
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const [statementIndex, setStatementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % TITLE_STATEMENTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-12 px-6 md:px-12 z-10 w-full max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full pb-20">
        
        {/* Main Title Area */}
        <div className="md:col-span-12 lg:col-span-10 xl:col-start-2 flex flex-col justify-center mb-12 md:mb-20">
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1 }}
             className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-gray-400 mb-6"
           >
             01 &mdash; The Studio
           </motion.p>
           <div className="relative">
             <AnimatePresence mode="wait">
               <motion.h1
                 key={statementIndex}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-serif leading-[1.1] md:leading-[1.05] tracking-tight text-gray-900"
               >
                 {TITLE_STATEMENTS[statementIndex]}
               </motion.h1>
             </AnimatePresence>
           </div>
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6, duration: 1 }}
             className="mt-10 md:mt-16 lg:mt-20 flex flex-col md:flex-row gap-6 md:gap-24 items-start"
           >
             <p className="text-sm md:text-base font-sans text-gray-500 max-w-md leading-relaxed">
               Based in Hyderabad, we are a full-service architecture and interior design studio crafting spaces that balance purposeful design with timeless character.
             </p>
             <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] text-gray-400 md:self-end pt-2">
               Architecture & Interior Design
             </p>
           </motion.div>
        </div>

        {/* Image Composition */}
        <div className="md:col-span-12 relative h-[45vh] sm:h-[55vh] md:h-[75vh] flex items-end">
          <motion.div 
            style={{ y: y1 }}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            transition={{ delay: 0.2, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[70%] h-full relative z-10 overflow-hidden ml-auto group rounded-2xl md:rounded-none"
          >
             <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" alt="Modern Architecture Exterior" className="w-full h-full object-cover object-center grayscale-[30%] group-hover:scale-[1.03] group-hover:-translate-y-2 group-hover:grayscale-0 transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </motion.div>

          {/* Secondary Offset Image */}
          <motion.div 
             style={{ y: y2 }}
             initial={{ opacity: 0, y: 60 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
             className="absolute bottom-[-10%] sm:bottom-[-15%] md:bottom-[-20%] left-[-4%] sm:left-0 md:left-[8%] w-[60%] sm:w-[50%] md:w-[35%] aspect-[3/4] z-20 overflow-hidden bg-white/20 backdrop-blur-[20px] border border-white/40 p-2 md:p-4 shadow-[0_12px_40px_rgba(79,22,54,0.05)] rounded-xl md:rounded-none"
          >
            <div className="w-full h-full overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop" alt="Interior Detail" className="w-full h-full object-cover object-center group-hover:scale-[1.05] group-hover:-translate-y-1 transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
