import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-12 px-6 md:px-12 w-full max-w-[1800px] mx-auto min-h-screen relative z-10 flex flex-col justify-center">
      <div className="mb-12 md:mb-16 pt-8 md:pt-12 border-b border-black/10 pb-8 text-center md:text-left">
        <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-gray-400 mb-4">04 &mdash; Connect</p>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900">Get in <span className="italic text-[#896f73]">Touch</span></h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-10 md:gap-12"
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif text-gray-900 mb-6">Hyderabad Studio</h3>
            <ul className="flex flex-col items-center md:items-start gap-5 text-sm font-sans text-gray-600">
               <li className="flex items-start gap-4">
                  <MapPin className="w-[18px] h-[18px] text-gray-500 shrink-0 stroke-[1.5] mt-0.5" />
                  <span>Jubilee Hills, Road No. 36<br/>Hyderabad 500033<br/>Telangana, India</span>
               </li>
               <li className="flex items-center gap-4">
                  <Phone className="w-[18px] h-[18px] text-gray-500 shrink-0 stroke-[1.5]" />
                  <span>+91 40 2345 6789</span>
               </li>
               <li className="flex items-center gap-4 group">
                  <Mail className="w-[18px] h-[18px] text-gray-500 shrink-0 stroke-[1.5] group-hover:text-black transition-colors" />
                  <a href="mailto:studio@vistaraatelier.com" className="group-hover:text-black transition-colors">hello@vistaraatelier.com</a>
               </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif text-gray-900 mb-6">Inquiries</h3>
            <p className="text-sm font-sans text-gray-500 max-w-md leading-relaxed mx-auto md:mx-0">
              For new project inquiries, press features, or career applications, please email us directly with a brief description of your request.
            </p>
          </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative overflow-hidden bg-gradient-to-br from-white/85 via-white/70 to-white/50 backdrop-blur-[20px] p-8 md:p-12 rounded-[2rem] border border-white/60 shadow-[0_8px_40px_rgba(79,22,54,0.03)]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-[2rem] shadow-[inset_0_1px_12px_rgba(255,255,255,0.6),inset_0_-1px_6px_rgba(79,22,54,0.01)]"></div>
          <h3 className="relative z-10 text-xl font-serif text-gray-900 mb-8">Send a Message</h3>
          <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.15em] font-sans text-gray-500 mb-2">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black focus:ring-0 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-sm font-sans" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.15em] font-sans text-gray-500 mb-2 transition-colors duration-500">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black focus:ring-0 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-sm font-sans" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.15em] font-sans text-gray-500 mb-2 transition-colors duration-500">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black focus:ring-0 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-sm font-sans resize-none"></textarea>
            </div>
            <button className="relative self-start mt-4 group flex items-center gap-3 text-sm uppercase tracking-widest text-black border border-black px-6 py-3 overflow-hidden transition-colors duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white hover:border-black">
              <span className="absolute inset-0 w-full h-full bg-black origin-bottom transform scale-y-0 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 z-0"></span>
              <span className="relative z-10 flex items-center gap-3">
                Submit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
