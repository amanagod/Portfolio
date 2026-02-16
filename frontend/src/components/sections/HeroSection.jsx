import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import Button from '../ui/Button';
import { personalInfo } from '../../data/personalInfo';
import profilePic from '../../assets/images/profile-pic.jpg';

const HeroSection = () => {
  return (
    <section className="relative section-padding min-h-[90vh] flex items-center overflow-hidden bg-grid-pattern">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl opacity-50 dark:opacity-20" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl opacity-50 dark:opacity-20" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-600 bg-primary-100 border border-primary-200 rounded-full mb-6 dark:text-primary-400 dark:bg-primary-500/10 dark:border-primary-500/20">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 dark:text-white leading-tight mb-4"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-700 dark:text-dark-200 font-medium mb-4"
            >
              {personalInfo.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 dark:text-dark-400 text-lg max-w-lg mb-8"
            >
              {personalInfo.tagline}. I build clean, scalable, and user-friendly
              web applications that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button to="/projects" size="lg">
                View Projects <FiArrowRight />
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-3"
            >
              {[
                { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
                { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                { icon: SiLeetcode, href: personalInfo.social.leetcode, label: 'LeetCode' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-lg text-gray-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500/30 transition-all"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right side — Profile Photo with Tech Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Spinning border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 blur-lg opacity-30 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-2xl">
                <img 
                  src={profilePic} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating tech badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 -right-4 bg-white dark:bg-dark-800 p-3 rounded-xl shadow-xl border border-gray-100 dark:border-dark-700 flex items-center gap-2"
              >
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Status</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-white">Open to Work</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 -left-8 bg-white dark:bg-dark-800 p-3 rounded-xl shadow-xl border border-gray-100 dark:border-dark-700 flex items-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">
                  150+
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">LeetCode</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-white">Problems Solved</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
