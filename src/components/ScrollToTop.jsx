import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi pathname (URL) change hoga, browser screen instantly top par shift ho jayegi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ye component UI me kuch render nahi karega, sirf background logic chalayega
};

export default ScrollToTop;