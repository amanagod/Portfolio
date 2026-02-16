import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SEO from '../components/common/SEO';
import AnimatedSection from '../components/common/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import SkillBadge from '../components/ui/SkillBadge';
import ExperienceCard from '../components/ui/ExperienceCard';
import Button from '../components/ui/Button';
import { personalInfo } from '../data/personalInfo';
import { skillCategories } from '../data/skills';
import { workExperience, education, achievements } from '../data/experience';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about Nishant Panchal — Full Stack Developer, MERN stack specialist, and B.Tech CSE graduate."
      />

      {/* Introduction / Bio */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                I&apos;m{' '}
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <p className="text-gray-600 dark:text-dark-300 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-gray-500 dark:text-dark-400 max-w-2xl mx-auto">
                I love building clean, user-friendly web experiences that solve
                real problems. My goal is to continuously grow as a developer and
                contribute to impactful projects.
              </p>
            </motion.div>

            {/* Stats */}
            <AnimatedSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {[
                  { label: 'Projects Built', value: '5+' },
                  { label: 'LeetCode Problems', value: '150+' },
                  { label: 'Technologies', value: '20+' },
                  { label: 'Internship', value: '6 mo' },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-5 text-center rounded-xl"
                  >
                    <div className="text-2xl font-heading font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-dark-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills & Tech Stack */}
      <section className="section-padding bg-gray-100/50 dark:bg-dark-900/30">
        <div className="container-custom">
          <SectionHeading
            title="Skills & Tech Stack"
            subtitle="Technologies I work with daily"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIdx) => (
              <AnimatedSection
                key={category.title}
                delay={catIdx * 0.1}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-500" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      icon={skill.icon}
                      name={skill.name}
                      color={skill.color}
                    />
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Experience"
            subtitle="My professional journey"
          />
          <div className="max-w-2xl mx-auto">
            {workExperience.map((exp, idx) => (
              <ExperienceCard
                key={idx}
                title={exp.title}
                subtitle={exp.subtitle}
                date={exp.date}
                description={exp.description}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-gray-100/50 dark:bg-dark-900/30">
        <div className="container-custom">
          <SectionHeading
            title="Education"
            subtitle="My academic background"
          />
          <div className="max-w-2xl mx-auto">
            {education.map((edu, idx) => (
              <ExperienceCard
                key={idx}
                title={edu.title}
                subtitle={edu.subtitle}
                date={edu.date}
                description={edu.description}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
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

      {/* CTA */}
      <section className="section-padding bg-gray-100/50 dark:bg-dark-900/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Like what you see?
            </h2>
            <p className="text-gray-500 dark:text-dark-400 mb-8 max-w-md mx-auto">
              Check out my projects or get in touch to discuss opportunities.
            </p>
            <div className="flex justify-center gap-4">
              <Button to="/projects">
                View Projects <FiArrowRight />
              </Button>
              <Button to="/contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
