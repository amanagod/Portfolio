import { motion } from 'framer-motion';

/**
 * Tech stack badge with icon and label.
 */
const SkillBadge = ({ icon: Icon, name, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-2 px-4 py-2.5 glass-card rounded-lg hover:border-primary-500/30 transition-all duration-300"
    >
      {Icon && <Icon className="text-xl" style={{ color }} />}
      <span className="text-sm font-medium text-gray-700 dark:text-dark-200">{name}</span>
    </motion.div>
  );
};

export default SkillBadge;
