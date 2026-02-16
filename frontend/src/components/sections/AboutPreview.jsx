import { FiArrowRight } from 'react-icons/fi';
import AnimatedSection from '../common/AnimatedSection';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { personalInfo } from '../../data/personalInfo';

const AboutPreview = () => {
  return (
    <section className="section-padding bg-gray-100/50 dark:bg-dark-900/30">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="A quick look at who I am"
        />

        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 dark:text-dark-300 text-lg leading-relaxed mb-6">
            {personalInfo.shortBio}
          </p>
          <p className="text-gray-500 dark:text-dark-400 mb-8">
            Currently seeking opportunities as a{' '}
            <span className="text-primary-400 font-medium">
              Software Developer
            </span>{' '}
            /{' '}
            <span className="text-primary-400 font-medium">
              Full Stack Developer
            </span>{' '}
            /{' '}
            <span className="text-primary-400 font-medium">
              MERN Developer
            </span>{' '}
            to deliver efficient and reliable software solutions.
          </p>
          <Button to="/about" variant="outline">
            Read More About Me <FiArrowRight />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutPreview;
