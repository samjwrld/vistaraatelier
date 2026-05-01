import React from 'react';
import { motion } from 'motion/react';

export const GeometricBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
    {/* Base Grid - Architectural Paper */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]"></motion.div>
    
    {/* Diagonal Lattice/Jaali structure */}
    <motion.div 
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute inset-0 z-0 bg-[linear-gradient(45deg,#00000003_1px,transparent_1px),linear-gradient(-45deg,#00000003_1px,transparent_1px)] bg-[size:5.65rem_5.65rem]"></motion.div>
    
    {/* Vastu Purusha Mandala (Manduka 8x8 Grid) - Ethereal overlay */}
    <motion.svg 
       animate={{ rotate: [0, 1, 0, -1, 0], x: [0, 5, 0, -5, 0] }}
       transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
       className="absolute top-[5vh] md:top-[10vh] -right-[20vw] md:-right-[10vw] w-[120vw] md:w-[60vw] h-[120vw] md:h-[60vw] opacity-[0.08]" viewBox="0 0 100 100">
       {/* Outer Boundary */}
       <rect x="10" y="10" width="80" height="80" fill="none" stroke="black" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
       
       {/* 8x8 Grid Lines (64 Padas) */}
       {[20, 30, 40, 50, 60, 70, 80].map(val => (
           <React.Fragment key={val}>
               <line x1={val} y1="10" x2={val} y2="90" stroke="black" strokeWidth="0.1" vectorEffect="non-scaling-stroke" />
               <line x1="10" y1={val} x2="90" y2={val} stroke="black" strokeWidth="0.1" vectorEffect="non-scaling-stroke" />
           </React.Fragment>
       ))}

       {/* Cross / Energy Lines (Brahma Sutras) */}
       <line x1="10" y1="50" x2="90" y2="50" stroke="black" strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
       <line x1="50" y1="10" x2="50" y2="90" stroke="black" strokeWidth="0.3" vectorEffect="non-scaling-stroke" />

       {/* Diagonal Lines (Karna Sutras) */}
       <line x1="10" y1="10" x2="90" y2="90" stroke="black" strokeWidth="0.15" strokeDasharray="1 2" vectorEffect="non-scaling-stroke" />
       <line x1="10" y1="90" x2="90" y2="10" stroke="black" strokeWidth="0.15" strokeDasharray="1 2" vectorEffect="non-scaling-stroke" />
       
       {/* Central Brahmasthan */}
       <rect x="40" y="40" width="20" height="20" fill="none" stroke="black" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
       <circle cx="50" cy="50" r="14.14" fill="none" stroke="black" strokeWidth="0.2" strokeDasharray="1 1" vectorEffect="non-scaling-stroke" />
       <circle cx="50" cy="50" r="20" fill="none" stroke="black" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />

       {/* Cardinal Direction Nodes */}
       <circle cx="50" cy="10" r="0.6" fill="black" />
       <circle cx="50" cy="90" r="0.6" fill="black" />
       <circle cx="10" cy="50" r="0.6" fill="black" />
       <circle cx="90" cy="50" r="0.6" fill="black" />
    </motion.svg>

    {/* Ancient Temple Floor Plan (Garbhagriha & Mandapa) */}
    <motion.svg 
      animate={{ opacity: [0.03, 0.07, 0.03], scale: [1, 1.02, 1] }}
      transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[40vh] md:top-[30vh] left-[20vw] md:left-[30vw] w-[60vw] md:w-[30vw] h-[80vw] md:h-[40vw] opacity-[0.06] -rotate-12" viewBox="0 0 200 300">
      {/* Outer Enclosure / Prakara */}
      <rect x="20" y="20" width="160" height="260" fill="none" stroke="black" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
      <rect x="25" y="25" width="150" height="250" fill="none" stroke="black" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
      
      {/* Entrance / Gopuram outline */}
      <rect x="80" y="5" width="40" height="15" fill="none" stroke="black" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
      <line x1="90" y1="5" x2="90" y2="20" stroke="black" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
      <line x1="110" y1="5" x2="110" y2="20" stroke="black" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
      
      {/* Mandapa (Pillared Hall) */}
      <rect x="50" y="60" width="100" height="100" fill="none" stroke="black" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
      {/* Columns in Mandapa */}
      {[...Array(6)].map((_, r) => (
        [...Array(6)].map((_, c) => (
           <circle key={`${r}-${c}`} cx={60 + c*16} cy={70 + r*16} r="1.5" fill="none" stroke="black" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        ))
      ))}

      {/* Antarala (Vestibule) */}
      <rect x="70" y="160" width="60" height="30" fill="none" stroke="black" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
      
      {/* Garbhagriha (Inner Sanctum) */}
      <rect x="60" y="190" width="80" height="80" fill="none" stroke="black" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      <rect x="75" y="205" width="50" height="50" fill="none" stroke="black" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
      {/* Central Deity / Lingam marker */}
      <circle cx="100" cy="230" r="4" fill="black" />
      <circle cx="100" cy="230" r="10" fill="none" stroke="black" strokeWidth="0.3" strokeDasharray="2 2" vectorEffect="non-scaling-stroke" />
    </motion.svg>

    {/* Parametric Stepwell / Baoli Geometry (Bottom Left) */}
    <motion.svg 
       animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
       transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
       className="absolute bottom-[-10vh] left-[-15vw] md:left-[-5vw] w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] opacity-[0.08]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
       <polyline points="10,10 90,10 90,90 10,90 10,10" fill="none" stroke="black" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
       <polyline points="20,20 80,20 80,80 20,80 20,20" fill="none" stroke="black" strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
       <polyline points="30,30 70,30 70,70 30,70 30,30" fill="none" stroke="black" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
       <polyline points="40,40 60,40 60,60 40,60 40,40" fill="none" stroke="black" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
       <line x1="10" y1="10" x2="40" y2="40" stroke="black" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
       <line x1="90" y1="10" x2="60" y2="40" stroke="black" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
       <line x1="90" y1="90" x2="60" y2="60" stroke="black" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
       <line x1="10" y1="90" x2="40" y2="60" stroke="black" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
    </motion.svg>

    {/* Ogee Arch Silhouette - Minimal Indic */}
    <motion.svg 
      animate={{ opacity: [0.04, 0.08, 0.04], y: [0, 5, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[30vh] left-[5vw] w-[15vw] h-[25vw] opacity-[0.06]" viewBox="0 0 100 150">
      <path d="M0,150 L0,50 Q25,50 50,0 Q75,50 100,50 L100,150" fill="none" stroke="black" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
      <path d="M10,150 L10,60 Q25,60 50,20 Q75,60 90,60 L90,150" fill="none" stroke="black" strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
    </motion.svg>

    {/* Torana (Gateway) Outline */}
    <motion.svg 
      animate={{ x: [0, -8, 0], opacity: [0.04, 0.07, 0.04] }}
      transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[60vh] right-[15vw] w-[20vw] h-[15vw] opacity-[0.06]" viewBox="0 0 200 100">
      <rect x="20" y="20" width="10" height="80" stroke="black" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
      <rect x="170" y="20" width="10" height="80" stroke="black" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
      <path d="M10,20 Q100,-10 190,20 M10,35 Q100,5 190,35" fill="none" stroke="black" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <circle cx="100" cy="15" r="5" stroke="black" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
    </motion.svg>

    {/* Stupa / Dome Outline (Bottom Right) */}
    <motion.svg 
      animate={{ scale: [1, 1.02, 1], y: [0, -3, 0] }}
      transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-[5vh] right-[5vw] w-[20vw] h-[15vw] opacity-[0.06]" viewBox="0 0 100 60">
      <path d="M10,60 A40,40 0 0,1 90,60" fill="none" stroke="black" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
      <rect x="45" y="10" width="10" height="10" stroke="black" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
      <line x1="50" y1="0" x2="50" y2="10" stroke="black" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
    </motion.svg>

    {/* Global Directional / Axis Lines */}
    <motion.div 
      animate={{ opacity: [0.04, 0.08, 0.04] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-0 bottom-0 left-[20%] w-px bg-black/[0.04] hidden md:block"></motion.div>
    <motion.div 
      animate={{ opacity: [0.06, 0.1, 0.06] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      className="absolute top-0 bottom-0 right-[25%] w-px bg-black/[0.06]"></motion.div>
    <motion.div 
      animate={{ opacity: [0.04, 0.08, 0.04] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      className="absolute left-0 right-0 top-[30%] h-px bg-black/[0.04]"></motion.div>
    <motion.div 
      animate={{ opacity: [0.05, 0.09, 0.05] }}
      transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      className="absolute left-0 right-0 bottom-[15%] h-px bg-black/[0.05] hidden md:block"></motion.div>
  </div>
);
