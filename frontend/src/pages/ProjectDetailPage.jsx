import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiExternalLink,
  FiGithub,
  FiArrowLeft,
  FiCheckCircle,
} from 'react-icons/fi';
import SEO from '../components/common/SEO';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h2>
          <p className="text-gray-500 dark:text-dark-400 mb-6">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button to="/projects">
            <FiArrowLeft /> Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={project.title}
        description={project.shortDescription}
      />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Back Link */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-dark-400 hover:text-primary-400 transition-colors mb-8"
          >
            <FiArrowLeft /> Back to Projects
          </Link>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Thumbnail */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden glass-card mb-8">
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                  <span className="text-6xl font-heading font-bold text-primary-400/30">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>

            <p className="text-gray-600 dark:text-dark-300 text-lg mb-6">
              {project.shortDescription}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              {project.liveUrl && (
                <Button href={project.liveUrl}>
                  <FiExternalLink /> Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} variant="outline">
                  <FiGithub /> Source Code
                </Button>
              )}
            </div>
          </motion.div>

          {/* Overview */}
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
              Overview
            </h2>
            <p className="text-gray-600 dark:text-dark-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </AnimatedSection>

          {/* Tech Stack */}
          <AnimatedSection delay={0.1} className="mb-12">
            <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium glass-card rounded-lg text-primary-400 border border-primary-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Features */}
          <AnimatedSection delay={0.2} className="mb-12">
            <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 glass-card rounded-lg"
                >
                  <FiCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-dark-300">{feature}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <AnimatedSection delay={0.3} className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
                Challenges & Solutions
              </h2>
              <div className="space-y-4">
                {project.challenges.map((item, idx) => (
                  <div key={idx} className="glass-card p-5 rounded-xl">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-600 dark:text-dark-300 text-sm mb-3">
                      {item.challenge}
                    </p>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-600 dark:text-dark-300 text-sm">{item.solution}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* CTA */}
          <AnimatedSection delay={0.4} className="mt-16">
            <div className="glass-card rounded-2xl p-8 text-center">
              <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-3">
                Interested in this project?
              </h3>
              <p className="text-gray-500 dark:text-dark-400 mb-6">
                Check out my other projects or get in touch.
              </p>
              <div className="flex justify-center gap-4">
                <Button to="/projects" variant="outline">
                  More Projects
                </Button>
                <Button to="/contact">Contact Me</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;
