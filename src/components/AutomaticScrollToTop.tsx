import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function AutomaticScrollToTop() {
  const { pathname }: { pathname: string } = useLocation();

  useEffect(() => {
    window.scrollTo({ behavior: 'instant' as ScrollBehavior, top: 0 });
  }, [pathname]);

  return null;
}
