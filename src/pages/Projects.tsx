import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_PROJECTS } from '../constants/projects';

const CATEGORIES = ['All', 'Residential', 'Corporate', 'Hospitality', 'Aviation', 'Master Planning'];

const getLayoutClasses = (index: number) => {
  const pattern = index % 5;
  switch (pattern) {
    case 0: return { aspect: 'aspect-[3/4]', mt: '' };
    case 1: return { aspect: 'aspect-[4/3]', mt: '' };
    case 2: return { aspect: 'aspect-[1/1]', mt: '' };
    case 3: return { aspect: 'aspect-[4/5]', mt: '' };
    case 4: return { aspect: 'aspect-[3/5]', mt: '' };
    default: return { aspect: 'aspect-[4/3]', mt: '' };
  }
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = ALL_PROJECTS.filter(p => activeCategory === 'All' || p.category === activeCategory);
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const resetFilters = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };

  return (
    <div className="pt-32 pb-12 px-6 md:px-12 w-full max-w-[1800px] mx-auto min-h-screen relative z-10">
      
      {/* Top Header & Filters */}
      <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-900 mb-8 md:mb-12 uppercase tracking-tight"
        >
          Projects
        </motion.h1>
        
        <div className="flex gap-8 overflow-x-auto no-scrollbar w-full justify-start md:justify-center px-4 pb-2">
           {CATEGORIES.map(category => (
             <button 
               key={category}
               onClick={() => resetFilters(category)}
               className={`text-xs uppercase tracking-[0.15em] whitespace-nowrap transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[1px] after:origin-bottom-right after:transition-transform after:duration-[0.6s] after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:origin-bottom-left hover:after:scale-x-100 ${activeCategory === category ? 'text-black after:bg-black after:scale-x-100' : 'text-gray-400 hover:text-black after:bg-black after:scale-x-0'}`}
             >
               {category}
             </button>
           ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => {
            const layout = getLayoutClasses(index);
            
            return (
              <Link to={`/projects/${project.slug || project.id}`} key={project.id} className="block break-inside-avoid mb-16 md:mb-24">
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`group cursor-pointer block`}
                >
                  <div className={`w-full overflow-hidden relative bg-gray-100 ${layout.aspect} group-hover:shadow-[0_20px_50px_rgba(79,22,54,0.07)] transition-shadow duration-700 rounded-3xl m-2`}>
                     <div className="absolute inset-0 w-full h-full overflow-hidden">
                       <img 
                         src={project.image} 
                         alt={project.title} 
                         className="w-full h-full object-cover object-center grayscale-0 md:grayscale md:hover:grayscale-0 md:group-hover:grayscale-0 scale-100 md:group-hover:scale-[1.08] transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]" 
                       />
                     </div>
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-[1s] pointer-events-none"></div>
                     
                     {/* Glass overlay with refined animation - Always visible on mobile, hover on desktop */}
                     <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 glass-card rounded-2xl p-5 md:p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end">
                       <h3 className="text-base md:text-2xl font-serif text-white drop-shadow-sm">{project.title}</h3>
                       <p className="text-[9px] md:text-xs font-sans text-white/90 md:text-white/80 mt-1 md:mt-2 uppercase tracking-[0.15em] md:tracking-[0.2em]">{project.location}</p>
                     </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Load More */}
      {visibleCount < filteredProjects.length && (
        <div className="mt-32 mb-16 flex justify-center">
           <button 
             onClick={handleLoadMore}
             className="group flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
           >
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-black after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-[0.6s] after:ease-[cubic-bezier(0.16,1,0.3,1)] pb-0.5">Load More</span>
           </button>
        </div>
      )}
    </div>
  );
};

