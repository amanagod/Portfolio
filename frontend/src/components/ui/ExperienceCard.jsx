import { motion } from 'framer-motion';

/**
 * Timeline-style card for work experience / education entries.
 */
const ExperienceCard = ({ title, subtitle, date, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-10 border-l-2 border-gray-200 dark:border-dark-700 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-gray-50 dark:border-dark-900" />

      <div className="hover-card p-5">
        <span className="text-xs font-medium text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full">
          {date}
        </span>
        <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mt-3 mb-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-dark-400 mb-3">{subtitle}</p>
        )}
        {description && (
          <ul className="space-y-1.5">
            {(Array.isArray(description) ? description : [description]).map(
              (item, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-600 dark:text-dark-300 flex items-start gap-2"
                >
                  <span className="text-primary-500 mt-1.5 text-[6px]">●</span>
                  {item}
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
