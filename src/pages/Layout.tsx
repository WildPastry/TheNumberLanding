import Footer from '../components/Footer';
import Header from '../components/Header';
import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = (): JSX.Element => {
  return (
    <main className='h-full w-full p-3 relative'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
