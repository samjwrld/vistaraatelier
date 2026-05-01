import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: "01",
    title: "Discovery & Understanding",
    desc: "Deep-dive client briefing to interpret vision, lifestyle, functional needs, site context, and budget — establishing a clear design mandate before a single line is drawn.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Concept Development",
    desc: "Spatial narratives, zoning strategies, mood boards, and design direction — translating the brief into a coherent spatial proposition for client sign-off.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2671&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Design & Detailing",
    desc: "Layouts, material specifications, BOQs, custom furniture design, and full technical drawing sets — every element resolved before it reaches site.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Coordination & Procurement",
    desc: "Integration with MEP consultants, structural engineers, vendors, contractors, and specialised fabricators — ensuring seamless delivery across all workstreams.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Execution & Handover",
    desc: "On-site supervision ensuring quality, design integrity, and timeline adherence through to final handover — with zero compromise on the detail.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2670&auto=format&fit=crop",
  }
];

export const Approach = () => {
  return (
    <div className="w-full bg-[#fff4e8] text-gray-900 font-sans selection:bg-[#4f1636] selection:text-white pt-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-[1800px] mx-auto z-10 pt-12 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#896f73]"></div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#896f73]">The Vistara Method</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif text-[#4f1636] leading-[0.9] tracking-tight mb-10">
            The <span className="italic font-light text-[#896f73]">Discipline</span> <br/>
            of Design.
          </h1>
          
          <p className="text-lg md:text-3xl font-sans text-gray-600 max-w-3xl leading-relaxed font-light">
            Great architecture is not born from inspiration alone. It is the result of a rigorous, uncompromising methodology.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 right-6 md:right-12 hidden md:flex items-center gap-4 text-[#896f73]"
        >
          <span className="text-[10px] uppercase font-mono tracking-[0.2em]">Explore</span>
          <div className="w-[1px] h-24 bg-[#4f1636]/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 bg-[#4f1636]"
            />
          </div>
        </motion.div>
      </section>

      {/* ALTERNATING STEPS SECTION */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto pb-32">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={step.id} 
              className={`flex flex-col gap-12 md:gap-24 py-20 md:py-32 border-t border-[#4f1636]/10 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.16,1,0.3,1] }}
                className="w-full md:w-5/12 aspect-[4/5] md:aspect-[3/4] relative group overflow-hidden rounded-[2rem]"
              >
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover grayscale-[20%] transition-transform duration-[3s] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-[#4f1636]/5 group-hover:bg-transparent transition-colors duration-1000 mix-blend-multiply"></div>
                
                <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white/80 backdrop-blur-md px-4 py-2 border border-[#4f1636]/10 rounded-full flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#896f73]"></div>
                   <span className="font-mono text-xs uppercase tracking-widest text-[#4f1636]">Phase {step.id}</span>
                </div>
              </motion.div>

              {/* Text Side */}
              <div className="w-full md:w-7/12 flex flex-col justify-center relative">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16,1,0.3,1] }}
                  className={`max-w-2xl ${!isEven ? 'md:ml-auto' : ''}`}
                >
                  <div className="relative">
                    <span className="absolute -top-16 -left-8 md:-top-24 md:-left-12 text-[120px] md:text-[200px] font-serif text-[#4f1636]/[0.03] leading-none select-none pointer-events-none">
                        {step.id}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-[#4f1636] mb-8 relative z-10 leading-[1.1]">
                      {step.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-600 font-sans leading-relaxed mb-12">
                    {step.desc}
                  </p>
                  
                  <div className="flex items-center gap-6 group cursor-pointer w-max">
                    <div className="w-12 h-12 rounded-full border border-[#4f1636]/20 flex items-center justify-center transition-all group-hover:bg-[#4f1636] group-hover:border-[#4f1636] group-hover:shadow-[0_0_20px_rgba(79,22,54,0.3)]">
                      <ArrowRight className="w-5 h-5 text-[#896f73] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-mono uppercase tracking-widest text-[#896f73] group-hover:text-[#4f1636] transition-colors">
                      Learn More
                    </span>
                  </div>
                  
                </motion.div>
              </div>

            </div>
          );
        })}
      </section>

      {/* FOOTER CTA */}
      <section className="bg-[#4f1636] text-[#f8f5f1] py-32 md:py-48 px-6 text-center border-t border-[#896f73]/30">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="max-w-4xl mx-auto flex flex-col items-center"
         >
           <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif mb-12">Built to perfection.</h2>
           <Link 
             to="/contact" 
             className="inline-flex items-center gap-4 border border-white/30 px-10 py-5 rounded-full uppercase tracking-widest text-xs font-mono hover:bg-white hover:text-[#4f1636] transition-all duration-500 hover:scale-105"
           >
             Start a Conversation
             <ArrowRight className="w-4 h-4" />
           </Link>
         </motion.div>
      </section>

    </div>
  );
};

