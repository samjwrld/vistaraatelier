import React from 'react';
import { motion } from 'motion/react';
import { Triangle, Circle, Hexagon, Square, Component, Box } from 'lucide-react';

export const Clients = () => {
  const logos = [
    { icon: Triangle, name: "Vasavi Group" },
    { icon: Circle, name: "My Home Group" },
    { icon: Hexagon, name: "Rajapushpa" },
    { icon: Square, name: "APR Group" },
    { icon: Component, name: "Sumadhura" },
    { icon: Box, name: "Total Interiors" }
  ];

  return (
    <section className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 py-24 md:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="border-t border-b border-black/[0.04] py-16 md:py-24"
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-center">
           <div className="md:w-1/4">
             <h3 className="text-sm font-serif italic text-gray-500 tracking-wide">Collaborations &<br/>Selected Clients</h3>
           </div>
           
           <div className="md:w-3/4 flex flex-wrap md:flex-nowrap justify-center md:justify-end gap-x-12 gap-y-12 w-full">
             {logos.map((logo, idx) => {
               const Icon = logo.icon;
               return (
                 <motion.div 
                   key={idx} 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: idx * 0.1 }}
                   className="flex items-center gap-3 text-gray-400 hover:text-gray-800 transition-colors duration-300"
                 >
                   <Icon className="w-6 h-6 stroke-[1.5]" />
                   <span className="text-xs font-mono uppercase tracking-[0.15em] hidden lg:block">{logo.name}</span>
                 </motion.div>
               );
             })}
           </div>
        </div>
      </motion.div>
    </section>
  );
};
