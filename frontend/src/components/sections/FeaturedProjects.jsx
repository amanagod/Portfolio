import { FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';
import { projects } from '../../data/projects';

const FeaturedProjects = () => {
  return (
    <section className="section-padding bg-gray-100/50 dark:bg-dark-900/30">
      <div className="container-custom">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my best work"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {projects.slice(0, 4).map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        <div className="text-center">
          <Button to="/projects" variant="outline">
            View All Projects <FiArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
