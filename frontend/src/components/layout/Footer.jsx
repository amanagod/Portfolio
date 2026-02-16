import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants';

const socialIcons = [
  { icon: FiGithub, href: SOCIAL_LINKS.github, label: 'GitHub' },
  { icon: FiLinkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: SOCIAL_LINKS.leetcode, label: 'LeetCode' },
  { icon: FiMail, href: SOCIAL_LINKS.email, label: 'Email' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-dark-800/50 bg-white dark:bg-dark-950">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-xl font-heading font-bold text-gray-900 dark:text-white"
            >
              NP<span className="text-primary-500">.</span>
            </Link>
            <p className="mt-3 text-gray-500 dark:text-dark-400 text-sm max-w-xs">
              Full Stack Developer building scalable web applications with the
              MERN stack.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-500 dark:text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 glass-card rounded-lg text-gray-500 dark:text-dark-400 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-dark-800/50 text-center">
          <p className="text-sm text-gray-400 dark:text-dark-500">
            &copy; {currentYear} Nishant Panchal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
