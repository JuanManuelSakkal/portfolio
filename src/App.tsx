import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from './sections/HeroSection';
import TechnicalExpertiseSection from './sections/skills/TechnicalExpertiseSection';
import InfrastructureSection from './sections/skills/InfrastructureSection';
import FooterSection from './sections/FooterSection';
import WorkExperienceSection from './sections/work/WorkExperienceSection';
import MyProjectsSection from './sections/projects/MyProjectsSection';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <HeroSection />
      <TechnicalExpertiseSection />
      <WorkExperienceSection />
      <InfrastructureSection />
      <MyProjectsSection />
      <FooterSection />
    </div>
  );
}

export default App;