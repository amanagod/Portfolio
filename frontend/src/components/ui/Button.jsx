import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40',
  outline:
    'border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400',
  ghost:
    'text-gray-500 dark:text-dark-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-800',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

/**
 * Reusable button component with variants and optional link support.
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) => {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
