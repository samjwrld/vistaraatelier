import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  image: string;
  colSpan: string;
  aspect: string;
  offset?: string;
}

const ProjectsDetails: Project[] = [
  {
    id: 1,
    slug: 'serene-residence',
    title: 'Serene Residence',
    location: 'Hyderabad, India',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2670&auto=format&fit=crop',
    colSpan: 'md:col-span-8',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 2,
    slug: 'courtyard-house',
    title: 'Courtyard House',
    location: 'Bangalore, India',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[3/4]',
    offset: 'md:mt-32'
  },
  {
    id: 3,
    slug: 'ivory-villa',
    title: 'Ivory Villa',
    location: 'Hyderabad, India',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[4/5]',
    offset: 'md:-mt-24'
  },
  {
    id: 4,
    slug: 'monochrome-home',
    title: 'The Monochrome Home',
    location: 'Pune, India',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop',
    colSpan: 'md:col-span-8',
    aspect: 'aspect-[16/9]'
  }
];

const ProjectCard = ({ project }: { project: Project; key?: React.Key }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <Link to={`/projects/${project.slug}`} className={`${project.colSpan} ${project.offset || ''}`}>
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="group relative cursor-pointer"
      >
        <div className={`w-full overflow-hidden bg-gray-100 relative ${project.aspect} group-hover:shadow-[0_20px_50px_rgba(79,22,54,0.07)] transition-shadow duration-700 rounded-3xl m-2`}>
           <div className="absolute inset-[-15%] w-[130%] h-[130%]">
             <motion.img 
               style={{ y }}
               src={project.image} 
               alt={project.title} 
               className="w-full h-full object-cover object-center grayscale-0 md:grayscale md:hover:grayscale-0 md:group-hover:grayscale-0 scale-100 md:group-hover:scale-[1.08] transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]" 
             />
           </div>
           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-[1s] pointer-events-none"></div>
           
           {/* Glass overlay with refined animation - Always visible on mobile, hover on desktop */}
           <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 glass-card rounded-2xl p-5 md:p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-between items-end">
             <div>
               <h3 className="text-base md:text-2xl font-serif text-white drop-shadow-sm">{project.title}</h3>
               <p className="text-[9px] md:text-xs font-sans text-white/90 md:text-white/80 mt-1 md:mt-2 uppercase tracking-[0.15em] md:tracking-[0.2em]">{project.location}</p>
             </div>
             <div className="text-white drop-shadow-sm pb-1 md:pb-2">
               <ArrowUpRight className="w-5 h-5 font-light" />
             </div>
           </div>
        </div>
      </motion.div>
    </Link>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 py-32 md:py-48">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 mb-4">02 &mdash; Selected Works</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Spatial Volumes</h2>
        </div>
        <a href="/projects" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors group">
          View All Projects
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-24 md:gap-y-32">
        {ProjectsDetails.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
