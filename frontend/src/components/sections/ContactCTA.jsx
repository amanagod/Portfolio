import { motion } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import Button from '../ui/Button';
import { personalInfo } from '../../data/personalInfo';

const ContactCTA = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600/20 via-secondary-600/20 to-primary-600/20 border border-primary-500/20 p-10 md:p-16 text-center"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary-500/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-600 dark:text-dark-300 text-lg max-w-lg mx-auto mb-8">
              I&apos;m currently open to new opportunities. Whether you have a
              project in mind or just want to connect, feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href={`mailto:${personalInfo.email}`}
                size="lg"
              >
                <FiMail /> Send Email
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Contact Page <FiArrowRight />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
