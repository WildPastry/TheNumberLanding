import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
  return (
    <section className='bg-lime'>
      <h1>HEADER</h1>
      {/* Logo */}
      <NavLink to={'/home'}>
        <h1>TheNumber</h1>
      </NavLink>
      {/* Desktop menu */}
      <ul className='bg-flame'>
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
