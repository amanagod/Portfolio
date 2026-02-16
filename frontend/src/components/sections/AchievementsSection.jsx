import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { achievements } from '../../data/experience';

const AchievementsSection = () => {
  return (
    <section className="section-padding bg-gray-100/50 dark:bg-dark-900/30">
      <div className="container-custom">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones and certifications"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="hover-card p-6 text-center"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-dark-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
