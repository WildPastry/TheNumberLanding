import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';

type NavLinkMenuItem = {
  label: string;
  to: string;
  activeClass: string;
  inactiveClass?: string;
};

const LINKS: readonly NavLinkMenuItem[] = [
  { activeClass: 'text-water', label: 'HOME', to: '/home' },
  { activeClass: 'text-strawberry', label: 'PRIVACY', to: '/privacy' },
  { activeClass: 'text-berry', label: 'TERMS', to: '/terms' }
];

const Header: React.FC = (): JSX.Element => {
  return (
    <section className='absolute left-3 top-3'>
      <ul className='font-outfit-light text-xl'>
        {LINKS.map(
          ({ to, label, activeClass, inactiveClass = 'text-vanilla' }) => (
            <li key={to}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive || isPending ? activeClass : inactiveClass
                }
                to={to}>
                {label}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default Header;
