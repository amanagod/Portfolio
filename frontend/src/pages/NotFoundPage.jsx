import { motion } from 'framer-motion';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO title="404 - Page Not Found" />

      <section className="section-padding min-h-[70vh] flex items-center justify-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-lg mx-auto"
          >
            {/* 404 Number */}
            <div className="relative mb-8">
              <span className="text-[10rem] md:text-[12rem] font-heading font-bold gradient-text leading-none opacity-20">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">🔍</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-gray-500 dark:text-dark-400 text-lg mb-8">
              Oops! The page you&apos;re looking for doesn&apos;t exist or has
              been moved.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/">
                <FiHome /> Go Home
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate(-1)}
              >
                <FiArrowLeft /> Go Back
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
