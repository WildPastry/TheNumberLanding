import Badges from '../components/Badges';
import Footer from '../components/Footer';
import Header from '../components/Header';
import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = (): JSX.Element => {
  return (
    <main className='h-full w-full p-3 flex flex-col'>
      <Header />
      <section className='flex-auto max-w-7xl m-auto'>
        <Outlet />
        <Badges />
      </section>
      <section className='shrink-0'>
        <Footer />
      </section>
    </main>
  );
};

export default Layout;
