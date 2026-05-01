import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Triangle, Circle, Hexagon, Square, Component, Box, ArrowRight, Building2, Paintbrush, Hammer, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
];

export const AutoScrollProjectStrip = () => {
   return (
       <section className="w-full py-16 md:py-24 overflow-hidden relative z-10 bg-[#fff4e8] border-y border-black/[0.05]">
          <div className="flex animate-marquee hover:[animation-play-state:paused] gap-8 px-4">
             {[...projects, ...projects].map((src, i) => (
                 <div key={i} className="w-[70vw] md:w-[40vw] lg:w-[30vw] aspect-[4/3] shrink-0 overflow-hidden bg-gray-100">
                     <img src={src} className="w-full h-full object-cover grayscale-[20%] hover:scale-105 hover:grayscale-0 transition-all duration-700" alt="Project" />
                 </div>
             ))}
          </div>
       </section>
   )
};

export const EditorialBreak = () => {
    return (
        <section className="py-24 md:py-48 px-6 md:px-12 flex justify-center items-center relative z-10">
            <div className="glass-panel rounded-[2rem] p-10 md:p-24 max-w-6xl mx-auto flex flex-col items-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-50"></div>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-[#4f1636] text-center leading-[1.3] md:leading-[1.2] tracking-tight relative z-10">
                   Good design is not added. <br className="hidden md:block"/> It is <span className="italic text-[#896f73]">revealed.</span>
                </h2>
            </div>
        </section>
    )
};

export const ServicesGrid = () => {
    const services = [
        {
            title: "Luxury Residential Design — Hyderabad",
            description: "Bespoke interiors for apartments, independent villas, and penthouse residences. Tailored material palettes, space planning, custom joinery, and end-to-end execution for budgets starting Rs 15 Lakhs.",
            icon: Building2,
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Corporate Workspaces & Office Interiors — Hyderabad",
            description: "Architecture and interior design for corporate offices, tech campuses, co-working spaces, and incubation centres. From 5,000 sqft fit-outs to 2,00,000+ sqft master-planned developments.",
            icon: Square,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Cafe, Restaurant & Hospitality Design",
            description: "Concept-to-completion design for cafes, restaurants, QSRs, and premium lounges. Spatial storytelling, guest flow optimisation, material curation, and operational integration for F&B operators.",
            icon: Paintbrush,
            image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Greenfield & Large-Scale Developments",
            description: "Master planning, campus visioning, zoning, and circulation strategies for research parks, tech campuses, mixed-use developments, and integrated townships.",
            icon: Compass,
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Airport & Aviation Lounge Interiors",
            description: "Premium lounge environments for international and domestic terminals — spatial planning, passenger flow optimisation, and detailed hospitality interiors under complex operational constraints.",
            icon: Compass,
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <section className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 py-24 md:py-32">
            <div className="mb-20 text-center md:text-left max-w-2xl">
                <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#896f73] mb-4">Core Expertise</p>
                <h2 className="text-3xl md:text-5xl font-serif text-[#4f1636] leading-tight">We translate complex briefs into buildable environments.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-[2.5rem] glass-card flex flex-col h-full"
                    >
                        {/* Micro image bg overlay */}
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                             <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale" />
                        </div>
                        
                        <div className="p-8 md:p-10 flex flex-col items-center text-center h-full relative z-10">
                            <div className="mb-6 md:mb-8 p-5 md:p-6 rounded-3xl glass-badge text-[#4f1636] group-hover:scale-110 transition-transform duration-500">
                                <service.icon className="w-6 h-6 md:w-8 md:h-8 stroke-[1.25]" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif text-[#4f1636] mb-4">{service.title}</h3>
                            <p className="text-xs md:text-sm font-sans text-[#896f73] leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                        
                        {/* Subtle interactive accent */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4f1636]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export const ProcessSection = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery & Understanding",
            description: "Deep-dive client briefing to interpret vision, lifestyle, functional needs, site context, and budget — establishing a clear design mandate before a single line is drawn."
        },
        {
            number: "02",
            title: "Concept Development",
            description: "Spatial narratives, zoning strategies, mood boards, and design direction — translating the brief into a coherent spatial proposition for client sign-off."
        },
        {
            number: "03",
            title: "Design & Detailing",
            description: "Layouts, material specifications, BOQs, custom furniture design, and full technical drawing sets — every element resolved before it reaches site."
        },
        {
            number: "04",
            title: "Coordination & Procurement",
            description: "Integration with MEP consultants, structural engineers, vendors, contractors, and specialised fabricators — ensuring seamless delivery across all workstreams."
        },
        {
            number: "05",
            title: "Execution & Handover",
            description: "On-site supervision ensuring quality, design integrity, and timeline adherence through to final handover — with zero compromise on the detail."
        }
    ];

    return (
        <section className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 py-24 md:py-32">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <div className="w-full text-center md:text-left">
                    <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#896f73] mb-4">How we work</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4f1636]">The Journey</h2>
                </div>
                <p className="text-sm font-sans text-[#896f73] max-w-md leading-relaxed text-center md:text-left">
                    A refined approach to architectural excellence, ensuring every project is delivered with clarity and care.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-8">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.15 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        {/* Connecting Line (Desktop) */}
                        {i < steps.length - 1 && (
                            <div className="hidden lg:block absolute top-[2.25rem] left-[calc(100%-1rem)] w-full h-[1px] bg-gradient-to-r from-[#4f1636]/20 to-transparent z-0"></div>
                        )}
                        
                        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="w-12 h-12 rounded-full glass-badge flex items-center justify-center text-[10px] font-mono text-[#4f1636] mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-serif text-[#4f1636] mb-4">{step.title}</h3>
                            <p className="text-[11px] font-sans text-[#896f73] leading-relaxed md:pr-4">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export const FeatureProject = () => {
    return (
        <section className="relative z-10 w-full px-6 md:px-12 py-16 max-w-[1800px] mx-auto">
            <Link to="/projects/courtyard-house" className="block w-full relative h-[60vh] md:h-[80vh] overflow-hidden group cursor-pointer rounded-[2rem]">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-[1.03] group-hover:grayscale-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]" alt="Courtyard House"/>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-start md:items-end gap-6 glass-nav group-hover:bg-white/20 transition-all duration-[1.5s] border-b-0 border-x-0 !border-t-white/30 rounded-t-none rounded-[2rem]">
                    <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/80 mb-3 drop-shadow-sm">Featured Residence</p>
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif">The Courtyard House</h3>
                    </div>
                    <div className="flex items-center gap-2 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-bottom-right after:scale-x-0 group-hover/link:after:origin-bottom-left group-hover/link:after:scale-x-100 after:transition-transform after:duration-[0.6s] after:ease-[cubic-bezier(0.16,1,0.3,1)] pb-1 text-xs uppercase tracking-widest text-white transition-colors group/link">
                        Discover Project <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </div>
                </div>
            </Link>
        </section>
    )
};

const freeFlowImages = [
    { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop', aspect: 'aspect-[3/4]', mt: 'mt-0' },
    { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop', aspect: 'aspect-[4/3]', mt: 'mt-8 md:mt-32 lg:mt-48' },
    { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop', aspect: 'aspect-[1/1]', mt: 'mt-8 md:mt-16 lg:mt-12' },
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop', aspect: 'aspect-[3/5]', mt: 'mt-8 md:-mt-24 lg:-mt-48' },
    { src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1000&auto=format&fit=crop', aspect: 'aspect-[16/9]', mt: 'mt-8 md:mt-12' },
    { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop', aspect: 'aspect-[4/5]', mt: 'mt-8 md:mt-16 lg:-mt-24' },
];

export const FreeFlowGallery = () => {
    return (
        <section className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 py-32 md:py-48 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16">
                {freeFlowImages.map((img, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: i % 3 * 0.1 }}
                        className={`group w-full overflow-hidden bg-gray-100 relative ${img.aspect} ${img.mt}`}
                    >
                        <img alt="Gallery Image" src={img.src} className="w-full h-full object-cover grayscale-[70%] group-hover:scale-[1.05] group-hover:grayscale-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
};

export const MicroStatement = () => (
    <section className="py-24 md:py-32 text-center relative z-10 border-y border-black/[0.05]">
        <p className="text-sm md:text-base font-mono uppercase tracking-[0.2em] text-gray-500">Rooted in context, shaped for life.</p>
    </section>
);

export const ClientLogoMarquee = () => {
  const logos = [
    { icon: Triangle, name: "Vasavi Group" },
    { icon: Circle, name: "My Home Group" },
    { icon: Hexagon, name: "Rajapushpa" },
    { icon: Square, name: "APR Group" },
    { icon: Component, name: "Sumadhura" },
    { icon: Box, name: "Total Interiors" }
  ];

  return (
      <section className="w-full py-16 md:py-24 relative z-10">
          <div className="mb-12 text-center">
              <h3 className="text-sm font-serif italic text-gray-500 tracking-wide">Selected Collaborations</h3>
          </div>
          <div className="w-full glass-panel !rounded-none !border-x-0 !border-y-white/30 py-10 md:py-14 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 pointer-events-none z-20"></div>
              <div className="flex animate-marquee-reverse gap-16 md:gap-32 px-8 items-center h-12 relative z-10">
                 {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => {
                   const Icon = logo.icon;
                   return (
                     <div key={idx} className="flex items-center gap-3 text-[#a79296] hover:text-[#4f1636] transition-colors shrink-0">
                       <Icon className="w-6 h-6 stroke-[1.5]" />
                       <span className="text-xs font-mono uppercase tracking-[0.15em]">{logo.name}</span>
                     </div>
                   );
                 })}
              </div>
          </div>
      </section>
  )
};

export const DesignerMinimal = () => (
    <section className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 py-32 md:py-48 flex flex-col items-center justify-center text-center">
        <div className="glass-panel rounded-[3rem] p-16 md:p-24 flex flex-col items-center relative overflow-hidden group w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-50"></div>
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 border border-white/60 p-1 shadow-[0_12px_40px_rgba(79,22,54,0.15),inset_0_2px_8px_rgba(255,255,255,0.6)] relative z-10 glass-nav">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" className="w-full h-full rounded-full object-cover grayscale" alt="Vaishnavi Sankala"/>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-[#4f1636] mb-3 relative z-10">Vaishnavi Sankala</h3>
            <p className="text-[11px] md:text-sm font-mono uppercase tracking-[0.15em] text-[#896f73] relative z-10">Principal Architect</p>
        </div>
    </section>
);

export const FinalCTA = () => (
    <section className="relative z-10 w-full max-w-5xl mx-auto py-24 md:py-48 px-6 mb-24">
        <div className="glass-panel rounded-[3rem] p-12 md:p-32 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-50"></div>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif text-[#4f1636] mb-12 relative z-10">Ready to shape your space?</h2>
            <Link to="/contact" className="relative group/link flex items-center gap-3 border border-[#4f1636]/40 px-8 py-4 md:px-10 md:py-5 overflow-hidden transition-colors duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white hover:border-[#4f1636]/0 rounded-2xl z-10 glass-badge">
                <span className="absolute inset-0 w-full h-full bg-[#4f1636] origin-bottom transform scale-y-0 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:scale-y-100 z-0"></span>
                <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest text-[10px] md:text-xs font-mono text-[#4f1636] group-hover/link:text-white transition-colors duration-[0.6s]">
                     Start a Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </span>
            </Link>
        </div>
    </section>
);
