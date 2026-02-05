import type { JSX } from 'react';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = (): JSX.Element => {
  // Dependencies
  const currentDate: number = new Date().getFullYear();
  const { pathname }: { pathname: string } = useLocation();

  /**
   * Returns a tailwind class string for the hover effect
   * based on the current URL path.
   *
   * @returns {string} A tailwind class string for the hover effect.
   *
   * If the current URL path is '/terms', returns 'hover:text-berry'.
   * If the current URL path is '/privacy', returns 'hover:text-strawberry'.
   * Otherwise, returns 'hover:text-water'.
   */
  const getHoverClass = (): string => {
    if (pathname === '/terms') return 'hover:text-berry';
    if (pathname === '/privacy') return 'hover:text-strawberry';
    return 'hover:text-water';
  };

  return (
    <footer aria-label='Site footer' className='p-5 shrink-0 bg-(--surface)'>
      <div className='flex justify-end gap-1'>
        <p className='text-md'>© {currentDate}</p>
        <a
          aria-label='Mike Parker website (opens in a new tab)'
          className={`text-md text-(--fg) ${getHoverClass()}`}
          href='https://mikeparker.co.nz/'
          rel='noopener noreferrer'
          target='_blank'
          title='Mike Parker website'>
          Mike Parker
        </a>
      </div>
    </footer>
  );
};

export default Footer;
