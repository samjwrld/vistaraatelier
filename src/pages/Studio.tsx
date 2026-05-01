import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Studio = () => {
  const philosophies = [
    {
      title: "Contextual Integrity",
      desc: "Every design begins by listening to the land, the climate, and the culture. We don't impose forms; we uncover them."
    },
    {
      title: "Honest Materiality",
      desc: "We favor materials that age gracefully and express their true nature—stone, timber, raw concrete, and natural plaster."
    },
    {
      title: "Human Scale",
      desc: "Architecture must serve the senses. We calibrate light, proportion, and texture to create spaces that feel inherently right."
    }
  ];

  return (
    <div className="pt-32 pb-12 w-full min-h-screen relative z-10 bg-[#fff4e8]">
      {/* HERO */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="px-6 md:px-12 max-w-[1800px] mx-auto mb-16 md:mb-32"
      >
        <div className="w-full h-[45vh] sm:h-[60vh] md:h-[75vh] overflow-hidden bg-gray-100 relative group rounded-2xl md:rounded-none">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop" 
            alt="Studio Visual" 
            className="w-full h-full object-cover grayscale-[20%] group-hover:scale-[1.03] transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
        </div>
      </motion.section>

      {/* SHORT INTRO */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto text-center mb-24 md:mb-40">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-[1.4] md:leading-[1.2] tracking-tight"
        >
          We believe in architecture as an <span className="italic text-[#896f73]">enduring narrative,</span> deeply rooted in its context and meticulously crafted for human experience.
        </motion.h2>
      </section>

      {/* STORY */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4"
          >
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 md:sticky md:top-32">Studio Profile</h3>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-8 max-w-2xl flex flex-col gap-8 text-sm md:text-base font-sans text-gray-600 leading-relaxed"
          >
            <p className="text-lg md:text-xl text-gray-900 border-l-2 border-[#4f1636] pl-6 italic">
              Vistara Atelier is a full-service architecture and interior design studio based in Hyderabad, India — crafting spaces that balance purposeful design with timeless character.
            </p>
            <p>
              We work with discerning homeowners, residential developers, corporate occupiers, and hospitality brands across Hyderabad and beyond. Our work spans luxury villa and apartment interiors, high-performance corporate workspaces, boutique cafes, restaurant interiors, and large-scale master-planned developments.
            </p>
            <p>
              Handling projects from 2,000 sqft to over 2,00,000 sqft with equal rigour and design intent, we maintain a design-first approach rooted in spatial clarity, material honesty, and detail resolution. We translate complex briefs into refined, buildable environments — from concept through execution.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4 text-[10px] uppercase tracking-widest text-[#896f73] font-mono">
              <span>Interior Design</span>
              <span>Architecture</span>
              <span>Luxury Residential</span>
              <span>Corporate Workspace</span>
              <span>Hospitality</span>
              <span>Master Planning</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32 md:mb-40">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="border-t border-black/10 pt-16 md:pt-24"
        >
          <div className="mb-16 max-w-2xl">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 mb-8">Design Philosophy</h3>
            <p className="text-xl md:text-2xl font-serif text-gray-900 leading-relaxed">
              At Vistara Atelier, design unfolds as a considered interplay of purpose, form, and lived experience — resulting in spaces that feel both intuitive and enduring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <span className="text-xs font-mono text-gray-400">01</span>
              <h4 className="text-2xl font-serif text-gray-900">Intuitive Balance</h4>
              <p className="text-sm font-sans text-gray-500 leading-relaxed">Each environment is composed with balance and ease, where functionality aligns seamlessly with a timeless aesthetic.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <span className="text-xs font-mono text-gray-400">02</span>
              <h4 className="text-2xl font-serif text-gray-900">Material Honesty</h4>
              <p className="text-sm font-sans text-gray-500 leading-relaxed">Materials are curated to speak for themselves — their textures, tones, and grain articulated through precise, understated detailing.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <span className="text-xs font-mono text-gray-400">03</span>
              <h4 className="text-2xl font-serif text-gray-900">Seamless Integration</h4>
              <p className="text-sm font-sans text-gray-500 leading-relaxed">Services are invisibly integrated, preserving the purity of the architectural expression, remaining relevant far beyond the day it is completed.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4"
          >
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 md:sticky md:top-32">Who We Work With</h3>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-8 grid grid-cols-1 gap-12"
          >
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-serif text-gray-900">Residential Clients — Hyderabad</h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">We partner with homeowners, HNI families, and NRI buyers investing in premium residences across Hyderabad’s key neighbourhoods — Jubilee Hills, Banjara Hills, Gachibowli, Hitech City, Kokapet, Narsingi, Manikonda, and Shamshabad. Project budgets typically start at Rs 15–20 Lakhs for interiors, scaling to full architecture + interior packages for independent villas and bungalows.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-serif text-gray-900">Cafe & Restaurant Owners — Hyderabad</h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">From standalone cafes and cloud kitchen fit-outs to fine-dining restaurants and multi-outlet F&B brands — we bring spatial intelligence and hospitality expertise to every brief. A well-designed space is a brand asset and a revenue driver.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-serif text-gray-900">Corporate & Enterprise Clients — Hyderabad</h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">IT companies, GCCs, startups, co-working operators, and real estate developers seeking end-to-end workspace architecture and fit-out services in Hyderabad’s key commercial districts — Hitech City, Gachibowli, Financial District, and Kondapur.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FULL SERVICE CAPABILITIES */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4"
          >
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 md:sticky md:top-32">Capabilities</h3>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <ul className="flex flex-col gap-4 text-sm font-sans text-gray-600">
                <li>&mdash; Master planning & large-scale development</li>
                <li>&mdash; Architecture concept thru documentation</li>
                <li>&mdash; Interior design: Residential, Commercial, F&B</li>
                <li>&mdash; Detailed design, BOQs & tender sets</li>
              </ul>
              <ul className="flex flex-col gap-4 text-sm font-sans text-gray-600">
                <li>&mdash; Material curation & vendor coordination</li>
                <li>&mdash; Multi-stakeholder project management</li>
                <li>&mdash; Luxury villa & apartment interiors</li>
                <li>&mdash; Corporate workspace fit-outs</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY VISTARA */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32 md:mb-40 text-left">
        <div className="bg-[#4f1636] rounded-[3rem] p-12 md:p-24 text-white">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-12">Why Vistara Atelier</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm text-white/80 font-sans leading-relaxed">
            <li className="flex items-start gap-4">
               <span className="text-white/40 font-serif text-lg leading-none mt-1">&mdash;</span>
               <span>Refined design sensibility grounded in technical rigour</span>
            </li>
            <li className="flex items-start gap-4">
               <span className="text-white/40 font-serif text-lg leading-none mt-1">&mdash;</span>
               <span>Proven capability across residential, commercial, and hospitality typologies</span>
            </li>
            <li className="flex items-start gap-4">
               <span className="text-white/40 font-serif text-lg leading-none mt-1">&mdash;</span>
               <span>Seamless collaboration with multidisciplinary consultants and contractors</span>
            </li>
            <li className="flex items-start gap-4">
               <span className="text-white/40 font-serif text-lg leading-none mt-1">&mdash;</span>
               <span>Detail-driven delivery — from first sketch through final handover</span>
            </li>
            <li className="flex items-start gap-4">
               <span className="text-white/40 font-serif text-lg leading-none mt-1">&mdash;</span>
               <span>Transparent process, clear timelines, and no surprises</span>
            </li>
            <li className="flex items-start gap-4">
               <span className="text-white/40 font-serif text-lg leading-none mt-1">&mdash;</span>
               <span>Deep understanding of Hyderabad’s premium residential and commercial market</span>
            </li>
            <li className="flex items-start gap-4">
               <span className="text-white/40 font-serif text-lg leading-none mt-1">&mdash;</span>
               <span>Operating across Hyderabad — and across India for large-scale mandates</span>
            </li>
          </ul>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32 md:mb-40">
        <div className="glass-panel rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row gap-12 justify-between items-start md:items-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-50"></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl relative z-10"
          >
            <h3 className="text-xl md:text-3xl font-serif text-gray-900 mb-6 leading-tight">
              Over a decade of measured practice, spanning residential sanctuaries to commercial landmarks.
            </h3>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              Our portfolio reflects a quiet competence. We've had the privilege of partnering with families to build their generational homes, and with forward-thinking developers to craft spaces that elevate the everyday.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-8 md:gap-16 opacity-50 relative z-10 text-[#4f1636]"
          >
             <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-serif text-gray-900">40+</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Built Projects</span>
             </div>
             <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-serif text-gray-900">12</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Years of Practice</span>
             </div>
          </motion.div>
        </div>
      </section>

      {/* WORKING IMAGES */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/3] bg-gray-100 overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2671&auto=format&fit=crop" alt="Architectural drawings and materials" className="w-full h-full object-cover grayscale-[30%] hover:scale-[1.03] transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="aspect-[4/3] bg-gray-100 overflow-hidden md:mt-24"
          >
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop" alt="Construction detail" className="w-full h-full object-cover grayscale-[30%] hover:scale-[1.03] transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-panel rounded-[3rem] p-16 md:p-32 flex flex-col items-center justify-center text-center relative overflow-hidden group max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-50"></div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#4f1636] mb-12 relative z-10">Let's build something <span className="italic text-[#896f73]">enduring.</span></h2>
          <Link to="/contact" className="relative group/link flex items-center gap-3 border border-[#4f1636]/40 px-8 py-4 overflow-hidden transition-colors duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white hover:border-[#4f1636]/0 rounded-2xl z-10 glass-badge">
              <span className="absolute inset-0 w-full h-full bg-[#4f1636] origin-bottom transform scale-y-0 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:scale-y-100 z-0"></span>
              <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest text-xs font-mono text-[#4f1636] group-hover/link:text-white transition-colors duration-[0.6s]">
                  Discuss a Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
