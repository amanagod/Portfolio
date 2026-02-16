import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/ui/Button';
import { projects, projectCategories } from '../data/projects';
import { personalInfo } from '../data/personalInfo';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <SEO
        title="Projects"
        description="Explore my portfolio of web development projects built with MERN stack and more."
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Page Header */}
          <SectionHeading
            title="Projects"
            subtitle="A selection of my best work, showcasing what I can build."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectCategories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'glass-card text-gray-500 dark:text-dark-300 hover:text-gray-900 dark:hover:text-white hover:border-primary-500/30'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-dark-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 dark:text-dark-400 mb-6">
              Want to see more? Check out my GitHub for all repositories.
            </p>
            <div className="flex justify-center gap-4">
              <Button href={personalInfo.social.github}>
                <FiGithub /> Visit GitHub
              </Button>
              <Button to="/contact" variant="outline">
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
