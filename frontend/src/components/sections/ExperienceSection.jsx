import SectionHeading from '../ui/SectionHeading';
import ExperienceCard from '../ui/ExperienceCard';
import { workExperience } from '../../data/experience';

const ExperienceSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey so far"
        />

        <div className="max-w-2xl mx-auto">
          {workExperience.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              title={exp.title}
              subtitle={exp.subtitle}
              date={exp.date}
              description={exp.description}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
