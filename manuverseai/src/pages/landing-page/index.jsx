import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CompanyOverview from './components/CompanyOverview';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import AIValueSection from './components/AIValueSection';
import SolutionBenefits from './components/SolutionBenefits';
import WhitepapersSection from './components/WhitepapersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CompanyOverview />
        <ServicesSection />
        <IndustriesSection />
        <AIValueSection />
        <SolutionBenefits />
        <WhitepapersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;