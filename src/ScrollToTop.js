import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('Forcing scroll to top for path:', pathname); // Debug
    setTimeout(() => window.scrollTo(0, 0), 0); // Ensure scroll happens after DOM updates
  }, [pathname]);

  return null;
};

export default ScrollToTop;
