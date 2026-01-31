import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';

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
    <section className='p-5'>
      <ul className='font-outfit-light text-xl'>
        {LINKS.map(
          ({
            activeClass,
            hoverClass,
            inactiveClass = 'text-vanilla',
            label,
            to
          }) => (
            <li key={to}>
              <NavLink
                className={({ isActive, isPending }) =>
                  `${isActive || isPending ? activeClass : inactiveClass} ${hoverClass}`
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
