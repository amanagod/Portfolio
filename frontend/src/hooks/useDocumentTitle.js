import { useEffect } from 'react';

/**
 * Sets the document title dynamically.
 * @param {string} title - Page title to set
 * @param {string} suffix - Optional suffix (default: "Nishant Panchal")
 */
const useDocumentTitle = (title, suffix = 'Nishant Panchal') => {
  useEffect(() => {
    document.title = title ? `${title} | ${suffix}` : suffix;
    return () => {
      document.title = suffix;
    };
  }, [title, suffix]);
};

export default useDocumentTitle;

