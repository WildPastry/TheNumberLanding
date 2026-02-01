import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';
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
  return (
    <header className='flex justify-between p-5'>
      <nav aria-label='Primary navigation'>
        <ul className='font-outfit-bold text-xl flex flex-col gap-2'>
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
