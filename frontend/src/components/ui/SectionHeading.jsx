import { motion } from 'framer-motion';

/**
 * Consistent section title + optional subtitle for all pages.
 */
const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-dark-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
};

export default SectionHeading;
