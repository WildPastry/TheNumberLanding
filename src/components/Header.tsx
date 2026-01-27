import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
  return (
    <section className='absolute left-3 top-3'>
      {/* Desktop menu */}
      <ul className='font-outfit-bold text-xl'>
        <li>
          <NavLink to={'/home'}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={'/privacy'}>PRIVACY</NavLink>
        </li>
        <li>
          <NavLink to={'/terms'}>TERMS</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Header;
