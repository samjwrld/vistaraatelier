import React from 'react';
import { Hero } from '../components/Hero';
import { 
  AutoScrollProjectStrip,
  EditorialBreak,
  FeatureProject,
  ServicesGrid,
  ProcessSection,
  FreeFlowGallery,
  MicroStatement,
  ClientLogoMarquee,
  DesignerMinimal,
  FinalCTA
} from '../components/HomeSections';

export const Home = () => {
  return (
    <>
      <Hero />
      <AutoScrollProjectStrip />
      <EditorialBreak />
      <ServicesGrid />
      <ProcessSection />
      <FeatureProject />
      <FreeFlowGallery />
      <MicroStatement />
      <ClientLogoMarquee />
      <DesignerMinimal />
      <FinalCTA />
    </>
  );
};
