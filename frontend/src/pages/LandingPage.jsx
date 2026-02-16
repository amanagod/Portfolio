import SEO from '../components/common/SEO';
import HeroSection from '../components/sections/HeroSection';
import AboutPreview from '../components/sections/AboutPreview';
import SkillsSection from '../components/sections/SkillsSection';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import ExperienceSection from '../components/sections/ExperienceSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import ContactCTA from '../components/sections/ContactCTA';

const LandingPage = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Nishant Panchal — Full Stack Developer skilled in MERN stack, building scalable web applications."
      />
      <HeroSection />
      <AboutPreview />
      <SkillsSection />
      <FeaturedProjects />
      <ExperienceSection />
      <AchievementsSection />
      <ContactCTA />
    </>
  );
};

export default LandingPage;
