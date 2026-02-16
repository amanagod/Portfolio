import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import SEO from '../components/common/SEO';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/ui/Button';
import api from '../utils/api';
import { personalInfo } from '../data/personalInfo';

const contactDetails = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`,
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
  },
];

const socialLinks = [
  { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: personalInfo.social.leetcode, label: 'LeetCode' },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (formData.message.trim().length < 10) {
      toast.error('Message must be at least 10 characters.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.post('/contact', formData);
      toast.success(response.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Nishant Panchal for collaborations, job opportunities, or just a friendly chat."
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Contact Me
            </h1>
            <p className="text-gray-500 dark:text-dark-400 text-lg max-w-lg mx-auto">
              Feel free to reach out for collaborations, job opportunities, or
              just a friendly chat.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Left — Contact Info */}
            <AnimatedSection
              direction="left"
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Details */}
              <div className="space-y-4">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl"
                  >
                    <div className="p-3 bg-primary-500/10 rounded-lg">
                      <Icon className="text-primary-400" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-dark-500 uppercase tracking-wider">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-gray-700 dark:text-dark-200 hover:text-primary-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-700 dark:text-dark-200">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Resume Download */}
              <div className="glass-card p-4 rounded-xl">
                <Button
                  href={personalInfo.resumeUrl}
                  variant="outline"
                  className="w-full"
                >
                  <FiDownload /> Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                  Connect
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card rounded-lg text-gray-500 dark:text-dark-400 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Contact Form */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="glass-card p-6 md:p-8 rounded-2xl space-y-6"
              >
                <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-2">
                  Send a Message
                </h3>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600 dark:text-dark-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800/50 border border-gray-200 dark:border-dark-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 dark:text-dark-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800/50 border border-gray-200 dark:border-dark-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-600 dark:text-dark-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={5}
                    placeholder="Your message (at least 10 characters)"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800/50 border border-gray-200 dark:border-dark-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white font-medium rounded-lg shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>
          </div>

          {/* Bottom CTA */}
          <AnimatedSection className="mt-20 text-center">
            <div className="glass-card rounded-2xl p-10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                Let&apos;s Work Together!
              </h3>
              <p className="text-gray-500 dark:text-dark-400 mb-6">
                I&apos;m always open to discussing new projects and
                opportunities.
              </p>
              <div className="flex justify-center gap-4">
                <Button href={`mailto:${personalInfo.email}`}>
                  <FiMail /> Send Email
                </Button>
                <Button to="/projects" variant="outline">
                  View Projects
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
