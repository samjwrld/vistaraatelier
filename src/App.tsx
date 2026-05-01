import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import { GeometricBackground } from './components/GeometricBackground';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PageWrapper } from './components/PageWrapper';

import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Studio } from './pages/Studio';
import { Approach } from './pages/Approach';
import { Contact } from './pages/Contact';
import { ProjectDetail } from './pages/ProjectDetail';

const AnimatedRoutes = () => {
const location = useLocation();

return ( <AnimatePresence mode="wait"> <div key={location.pathname}> <Routes location={location}>
<Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
<Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
<Route path="/projects/:slug" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
<Route path="/studio" element={<PageWrapper><Studio /></PageWrapper>} />
<Route path="/approach" element={<PageWrapper><Approach /></PageWrapper>} />
<Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} /> </Routes> </div> </AnimatePresence>
);
};

export default function App() {
return ( <HashRouter> <ScrollToTop /> <main className="relative min-h-screen font-sans overflow-x-hidden"> <GeometricBackground /> <Nav /> <div className="pt-0"> <AnimatedRoutes /> </div> <Footer /> </main> </HashRouter>
);
}
