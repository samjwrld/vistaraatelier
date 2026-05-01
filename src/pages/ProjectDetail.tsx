import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Share2, Layers, Compass, Quote, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ALL_PROJECTS } from '../constants/projects';
import { InteractiveFloorPlan } from '../components/InteractiveFloorPlan';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = ALL_PROJECTS.find(p => p.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (project?.gallery) {
      setCurrentImageIndex((prev) => (prev === project.gallery!.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (project?.gallery) {
      setCurrentImageIndex((prev) => (prev === 0 ? project.gallery!.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, project]);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-[#4f1636] font-serif">
        <h1 className="text-4xl mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-sm font-mono uppercase tracking-widest hover:underline">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 w-full max-w-[1800px] mx-auto relative z-10">
      {/* Header Navigation */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12 flex justify-between items-center"
      >
        <Link to="/projects" className="group flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Grid</span>
        </Link>
        <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
      </motion.div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 md:mb-16 relative shadow-2xl"
      >
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="absolute bottom-6 left-6 md:bottom-16 md:left-16 text-white max-w-2xl">
          <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] mb-4 opacity-90">{project.category} &mdash; {project.location}</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.1] transition-all">{project.title}</h1>
        </div>
      </motion.div>

      {/* Intro Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
        <div className="lg:col-span-4 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#896f73]">Details</h2>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Year</p>
                <p className="text-lg font-serif">{project.year || '2023'}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Area</p>
                <p className="text-lg font-serif">{project.area || 'TBD'}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Location</p>
                <p className="text-lg font-serif">{project.location}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#896f73] flex items-center gap-2">
              <Layers className="w-3 h-3" /> Materials
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.materials?.map((m, i) => (
                <span key={i} className="px-4 py-2 bg-white/40 backdrop-blur-md border border-white/60 rounded-full text-[11px] uppercase tracking-wider text-[#4f1636]">
                  {m}
                </span>
              ))}
              {!project.materials && <p className="text-sm italic text-gray-400">Information coming soon</p>}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#896f73] flex items-center gap-2">
                <Compass className="w-3 h-3" /> Philosophy
              </h2>
              <p className="text-xl md:text-3xl font-serif text-[#4f1636] leading-relaxed">
                {project.philosophy || "Vistara Atelier believes that every space has a story waiting to be told through the careful orchestration of context, materiality, and light."}
              </p>
            </div>

            {project.testimonial && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/40 p-10 md:p-14 rounded-[3rem] relative overflow-hidden"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-[#4f1636] opacity-10" />
                <p className="text-xl italic font-serif text-[#4f1636] leading-relaxed mb-8">
                  "{project.testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-[#4f1636]/30"></div>
                  <p className="text-xs font-mono uppercase tracking-widest text-[#896f73]">{project.testimonial.author}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Floor Plan */}
      <div className="mt-32">
        <InteractiveFloorPlan />
      </div>

      {/* Detailed Gallery */}
      <div className="mt-32">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#896f73] mb-12 text-center">Visual Narrative</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery?.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-[2rem] overflow-hidden shadow-xl cursor-pointer ${i % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}
              onClick={() => openLightbox(i)}
            >
              <img src={img} alt={`${project.title} detail ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
            </motion.div>
          ))}
          {!project.gallery && (
            <div className="md:col-span-2 text-center py-24 border border-dashed border-gray-200 rounded-[2rem]">
              <p className="text-sm font-mono text-gray-400">Additional gallery images being curated.</p>
            </div>
          )}
        </div>
      </div>

      {/* Next Projects Navigation */}
      <div className="mt-24 md:mt-48 pt-16 md:pt-24 border-t border-gray-100 flex flex-col items-center">
        <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-400 mb-6 md:mb-8 text-center px-4">View more from Vistara</p>
        <Link to="/projects" className="text-3xl md:text-6xl font-serif text-[#4f1636] transition-all text-center px-4">Explore the Collection</Link>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && project?.gallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#4f1636]/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors p-2 z-[110]"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8 md:w-10 md:h-10 font-light" />
            </button>

            {/* Navigation Buttons */}
            {project.gallery.length > 1 && (
              <>
                <button 
                  className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors p-2 z-[110]"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-10 h-10 md:w-14 md:h-14 font-light" />
                </button>
                <button 
                  className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors p-2 z-[110]"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-10 h-10 md:w-14 md:h-14 font-light" />
                </button>
              </>
            )}

            {/* Image Container */}
            <motion.div 
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center p-4 md:p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={project.gallery[currentImageIndex]} 
                alt={`${project.title} - gallery image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
              
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-white/50 font-mono text-xs uppercase tracking-widest">{currentImageIndex + 1} / {project.gallery.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
