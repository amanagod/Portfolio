import AnimatedSection from '../common/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import SkillBadge from '../ui/SkillBadge';
import { skillCategories } from '../../data/skills';

const SkillsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <AnimatedSection
              key={category.title}
              delay={catIdx * 0.1}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-500" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    color={skill.color}
                  />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
