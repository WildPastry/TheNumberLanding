import type { JSX } from 'react';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = (): JSX.Element => {
  // Get current date
  const currentDate: number = new Date().getFullYear();
  // Get route
  const { pathname }: { pathname: string } = useLocation();

  const getHoverClass = (): string => {
    if (pathname === '/terms') {
      return 'hover:text-berry';
    } else if (pathname === '/privacy') {
      return 'hover:text-strawberry';
    }
    return 'hover:text-water';
  };

  return (
    <section className='p-5 shrink-0'>
      <div className='flex justify-end gap-1'>
        <p className='text-md'>© {currentDate}</p>
        <a
          className={`text-md text-(--fg) ${getHoverClass()}`}
          href='https://mikeparker.co.nz/'
          rel='noopener noreferrer'
          target='_blank'>
          Mike Parker
        </a>
      </div>
    </section>
  );
};

export default Footer;
