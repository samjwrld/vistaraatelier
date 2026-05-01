import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Info, Image as ImageIcon, Box } from 'lucide-react';

interface Room {
  id: string;
  name: string;
  path: string;
  furniturePath?: string;
  area: string;
  description: string;
  image: string;
  centerX: number;
  centerY: number;
}

const mockFloorPlan: Room[] = [
  {
    id: 'living',
    name: 'Living Room',
    path: 'M10,10 L40,10 L40,50 L10,50 Z',
    furniturePath: 'M15,15 L35,15 L35,25 L15,25 Z M20,30 L25,30 L25,40 L20,40 Z',
    area: '450 sq.ft',
    description: 'A spacious area for gathering with natural light throughout the day.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2670&auto=format&fit=crop',
    centerX: 25,
    centerY: 30,
  },
  {
    id: 'kitchen',
    name: 'Kitchen & Dining',
    path: 'M40,10 L70,10 L70,40 L40,40 Z',
    furniturePath: 'M45,15 L65,15 L65,20 L45,20 Z M50,25 L60,25 L60,35 L50,35 Z',
    area: '300 sq.ft',
    description: 'Open-concept culinary space designed for both function and entertainment.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2653&auto=format&fit=crop',
    centerX: 55,
    centerY: 25,
  },
  {
    id: 'master',
    name: 'Master Suite',
    path: 'M70,10 L100,10 L100,40 L70,40 Z',
    furniturePath: 'M75,15 L95,15 L95,25 L75,25 Z',
    area: '400 sq.ft',
    description: 'Private retreat featuring a walk-in closet and en-suite bathroom.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2657&auto=format&fit=crop',
    centerX: 85,
    centerY: 25,
  },
  {
    id: 'guest',
    name: 'Guest Room',
    path: 'M40,40 L70,40 L70,60 L40,60 Z',
    furniturePath: 'M45,45 L65,45 L65,55 L45,55 Z',
    area: '200 sq.ft',
    description: 'Comfortable accommodation for visitors with a courtyard view.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop',
    centerX: 55,
    centerY: 50,
  },
  {
    id: 'courtyard',
    name: 'Central Courtyard',
    path: 'M10,50 L40,50 L40,90 L10,90 Z',
    area: '500 sq.ft',
    description: 'The green heart of the home, bringing nature indoors.',
    image: 'https://images.unsplash.com/photo-1623298317883-6b7025404f66?q=80&w=2670&auto=format&fit=crop',
    centerX: 25,
    centerY: 70,
  },
  {
    id: 'library',
    name: 'Library / Study',
    path: 'M40,60 L100,60 L100,90 L40,90 Z',
    furniturePath: 'M45,65 L95,65 L95,85 L45,85 Z',
    area: '350 sq.ft',
    description: 'A quiet space for focus and contemplation.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2670&auto=format&fit=crop',
    centerX: 70,
    centerY: 75,
  }
];

export const InteractiveFloorPlan = () => {
  const [activeRoom, setActiveRoom] = useState<string | null>(null);
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);
  const [showFurniture, setShowFurniture] = useState(true);

  const selectedRoom = activeRoom ? mockFloorPlan.find(r => r.id === activeRoom) : null;

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 gap-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">Spatial Experience</h2>
          <p className="text-sm font-sans text-gray-500 max-w-xl">
            Explore the spatial layout organically. Select different zones to reveal specific
            functions, detailed imagery, and spatial configurations.
          </p>
        </div>
        
        <button 
          onClick={() => setShowFurniture(!showFurniture)}
          className={`flex items-center gap-3 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-mono transition-all duration-300 border ${
            showFurniture 
              ? 'border-[#4f1636] bg-[#4f1636] text-white' 
              : 'border-gray-300 bg-transparent text-gray-600 hover:border-gray-900'
          }`}
        >
          <Box className="w-4 h-4" />
          {showFurniture ? 'Hide Furniture' : 'Show Furniture'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-7 bg-white/40 backdrop-blur-md rounded-[3rem] border border-gray-200 p-8 shadow-sm overflow-hidden relative">
          {activeRoom && (
            <button 
              onClick={() => setActiveRoom(null)}
              className="absolute top-6 right-6 z-10 text-[10px] uppercase tracking-widest font-mono text-gray-500 hover:text-gray-900 border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full transition-colors"
            >
              Reset View
            </button>
          )}
          <svg 
            viewBox="0 0 110 100" 
            className="w-full h-auto drop-shadow-xl"
            style={{ strokeLinejoin: "round", strokeLinecap: "round" }}
          >
            <defs>
              <pattern id="diagonalHatch" width="3" height="3" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="3" stroke="#4f1636" strokeWidth="0.5" strokeOpacity="0.3" />
              </pattern>
            </defs>

            <motion.g
              style={{ originX: 0, originY: 0 }}
              animate={{
                scale: selectedRoom ? 1.4 : 1,
                x: selectedRoom ? 55 - (selectedRoom.centerX * 1.4) : 0,
                y: selectedRoom ? 50 - (selectedRoom.centerY * 1.4) : 0,
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Base Outline / Outer Walls */}
              <path 
                d="M10,10 L100,10 L100,90 L10,90 Z" 
                fill="none" 
                stroke="#4f1636" 
                strokeWidth="1.5" 
              />

              {/* Rooms */}
              {mockFloorPlan.map((room) => {
                const isActive = activeRoom === room.id;
                const isHovered = hoveredRoom === room.id;
                
                return (
                <g 
                  key={room.id} 
                  onClick={() => setActiveRoom(isActive ? null : room.id)} 
                  onMouseEnter={() => setHoveredRoom(room.id)}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer group"
                >
                  <path 
                    d={room.path}
                    fill={isActive ? "url(#diagonalHatch)" : isHovered ? "rgba(79,22,54,0.05)" : "transparent"}
                    stroke="#4f1636"
                    strokeWidth="0.5"
                    className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:fill-[#4f1636]/10"
                  />
                  
                  {/* Animated Border */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        d={room.path}
                        fill="transparent"
                        stroke="#4f1636"
                        strokeWidth="1.5"
                        className="pointer-events-none"
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Furniture elements */}
                  <AnimatePresence>
                    {showFurniture && room.furniturePath && (
                      <motion.path 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        d={room.furniturePath}
                        fill="#4f1636"
                        stroke="none"
                        className="pointer-events-none"
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Room Labels (visible on hover or active) */}
                  <text 
                    x={room.centerX} 
                    y={room.centerY} 
                    textAnchor="middle" 
                    alignmentBaseline="middle"
                    className={`font-mono tracking-widest pointer-events-none transition-all duration-500 ${
                      isActive ? "fill-[#4f1636] font-bold text-[3px]" : isHovered ? "fill-[#896f73] font-bold text-[3.5px] drop-shadow-md" : "fill-gray-500 group-hover:fill-gray-800 text-[3px]"
                    }`}
                  >
                    {room.name.toUpperCase()}
                  </text>
                </g>
              )})}
            </motion.g>
          </svg>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar pb-4 pt-2">
           {mockFloorPlan.map((room) => {
             const isActive = activeRoom === room.id;
             const isHovered = hoveredRoom === room.id;
             
             return (
               <div 
                 key={room.id}
                 onMouseEnter={() => setHoveredRoom(room.id)}
                 onMouseLeave={() => setHoveredRoom(null)}
                 className={`border rounded-2xl overflow-hidden transition-all duration-500 bg-white/60 backdrop-blur-md ${isActive ? 'border-[#4f1636] shadow-md' : isHovered ? 'border-[#896f73]/50 shadow-sm translate-x-1' : 'border-gray-200'}`}
               >
                 <button 
                   onClick={() => setActiveRoom(isActive ? null : room.id)}
                   className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none"
                 >
                   <div>
                     <h3 className={`text-base md:text-lg font-serif transition-colors duration-300 ${isActive || isHovered ? 'text-[#4f1636]' : 'text-gray-800'}`}>
                        {room.name}
                     </h3>
                     <p className="text-[10px] font-mono uppercase tracking-widest text-[#896f73] mt-1">Area: {room.area}</p>
                   </div>
                   <div className={`w-8 h-8 rounded-full flex justify-center items-center font-serif text-lg transition-colors duration-500 ${isActive ? 'bg-[#4f1636] text-white rotate-180' : isHovered ? 'bg-[#4f1636]/10 text-[#4f1636] rotate-90' : 'bg-gray-100/50 text-gray-400'}`}>
                     {isActive ? '-' : '+'}
                   </div>
                 </button>
                 <AnimatePresence>
                   {isActive && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                       className="px-4 md:px-6 pb-4 md:pb-6"
                     >
                       <p className="text-sm font-sans text-gray-600 mb-6 leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                         {room.description}
                       </p>
                       <div className="w-full h-40 md:h-48 rounded-xl overflow-hidden relative group">
                         <div className="absolute inset-0 bg-[#4f1636]/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                         <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             );
          })}
        </div>
      </div>
    </div>
  );
};
