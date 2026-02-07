import { NavLink, useNavigate } from 'react-router-dom';
import { FaInfinity } from 'react-icons/fa6';
import type { JSX } from 'react';
import ThemeToggle from './ThemeToggle';

type NavLinkMenuItem = {
  activeClass: string;
  hoverClass: string;
  inactiveClass?: string;
  label: string;
  to: string;
};

const LINKS: readonly NavLinkMenuItem[] = [
  {
    activeClass: 'text-water cursor-default',
    hoverClass: 'hover:text-water',
    label: 'HOME',
    to: '/home'
  },
  {
    activeClass: 'text-strawberry cursor-default',
    hoverClass: 'hover:text-strawberry',
    label: 'PRIVACY',
    to: '/privacy'
  },
  {
    activeClass: 'text-berry cursor-default',
    hoverClass: 'hover:text-berry',
    label: 'TERMS',
    to: '/terms'
  }
];

const Header: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    Promise.resolve(navigate('/home')).catch(() => undefined);
  };

  return (
    <header
      aria-label='Site header'
      className='flex justify-between items-center p-5 max-400:p-3 bg-(--surface) max-400:flex-col'>
      <button
        aria-label='The Number Logo'
        className='cursor-pointer text-flame hover:text-watermelon'
        onClick={handleLogoClick}
        title='The Number Logo'>
        <FaInfinity size={30} />
      </button>
      {/* Navigation */}
      <nav aria-label='Primary navigation'>
        <ul className='font-outfit-bold text-xl flex flex-row gap-5'>
          {LINKS.map(
            ({
              activeClass,
              hoverClass,
              inactiveClass = 'text-(--fg)',
              label,
              to
            }) => (
              <li key={to}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    [
                      isActive || isPending ? activeClass : inactiveClass,
                      hoverClass,
                      'inline-block py-1 rounded-sm',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-water',
                      'focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg)'
                    ].join(' ')
                  }
                  to={to}>
                  {label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </nav>

      <ThemeToggle />
    </header>
  );
};

export default Header;
