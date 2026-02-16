import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

/**
 * Project card for grid display.
 */
const ProjectCard = ({ project, index = 0 }) => {
  const { id, title, shortDescription, techStack, thumbnail, liveUrl, githubUrl } = project;
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 10; // Max rotation 5deg
    const rotateX = (0.5 - y) * 10;

    setTiltStyle({ rotateX, rotateY, scale: 1.02 });
    setGlowPosition({ x: x * 100, y: y * 100, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTiltStyle({ rotateX: 0, rotateY: 0, scale: 1 });
    setGlowPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group hover-card overflow-hidden relative transform-gpu"
      style={{
        transform: `perspective(1000px) rotateX(${tiltStyle.rotateX}deg) rotateY(${tiltStyle.rotateY}deg) scale(${tiltStyle.scale})`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: glowPosition.opacity,
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(99, 102, 241, 0.15), transparent 80%)`,
        }}
      />

      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-dark-800">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
            <span className="text-4xl font-heading font-bold text-primary-400/50">
              {title?.charAt(0)}
            </span>
          </div>
        )}
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-gray-900/80 dark:bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-600 rounded-full text-white hover:bg-primary-500 transition-colors"
              aria-label="Live Demo"
            >
              <FiExternalLink size={18} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 dark:bg-dark-700 rounded-full text-white hover:bg-gray-600 dark:hover:bg-dark-600 transition-colors"
              aria-label="Source Code"
            >
              <FiGithub size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-dark-400 text-sm mb-4 line-clamp-2">{shortDescription}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack?.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-md border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
          {techStack?.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium text-gray-500 dark:text-dark-400">
              +{techStack.length - 4} more
            </span>
          )}
        </div>

        {/* View Details Link */}
        <Link
          to={`/project/${id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
        >
          View Details
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
