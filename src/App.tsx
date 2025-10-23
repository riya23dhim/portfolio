import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css'
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import LeadershipSection from './components/LeadershipSection';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-out',
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white scroll-smooth">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection/>
      <SkillsSection />
      <ProjectsSection />
    
      <AchievementsSection/>
      <LeadershipSection/>
      <ContactSection />


      <Footer />
    </div>
  );
}

export default App;