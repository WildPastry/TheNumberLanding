import {
  NavLink,
  type NavigateFunction,
  useLocation,
  useNavigate
} from 'react-router-dom';
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
  // Dependencies
  const navigate: NavigateFunction = useNavigate();
  const { pathname }: { pathname: string } = useLocation();

  /**
   * Handles logo click by navigating to the home page.
   * It catches any errors that may occur during navigation and returns undefined.
   * @returns {Promise<void>} A promise that resolves to void.
   */
  const handleLogoClick = () => {
    Promise.resolve(navigate('/home')).catch(() => undefined);
  };

  /**
   * Returns a tailwind class string for the hover effect
   * based on the current URL path.
   *
   * If the current URL path is '/home', returns 'cursor-default hover:text-(--accent)'.
   * Otherwise, returns 'cursor-pointer hover:text-watermelon'.
   *
   * @returns {string} A tailwind class string for the hover effect.
   */
  const getHoverClass = (): string => {
    return pathname === '/home'
      ? 'cursor-default hover:text-(--accent)'
      : 'cursor-pointer hover:text-watermelon';
  };

  return (
    <header
      aria-label='Site header'
      className='flex justify-between items-center p-5 max-400:p-3 bg-(--surface) max-400:flex-col'>
      <button
        aria-label='The Number Logo'
        className={`text-(--accent) ${getHoverClass()}`}
        onClick={pathname === '/home' ? undefined : handleLogoClick}
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
