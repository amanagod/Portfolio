import useScrollToTop from '../../hooks/useScrollToTop';

/**
 * Component that scrolls to top on route change.
 * Place inside <BrowserRouter>.
 */
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

export default ScrollToTop;

