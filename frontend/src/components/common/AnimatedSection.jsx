import { motion } from 'framer-motion';

/**
 * Scroll-triggered animated section wrapper.
 * Wraps children with fade/slide animation when entering viewport.
 */
const AnimatedSection = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
}) => {
  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const { x, y } = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

