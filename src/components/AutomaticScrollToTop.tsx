import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function AutomaticScrollToTop() {
  // Dependencies
  const { pathname }: { pathname: string } = useLocation();

  useEffect(() => {
    window.scrollTo({ behavior: 'instant' as ScrollBehavior, top: 0 });
    // Effect listening to changes in pathname and will scroll to the top of the page
  }, [pathname]);

  return null;
}
