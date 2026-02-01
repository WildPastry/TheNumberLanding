import { AutomaticScrollToTop } from '../components/AutomaticScrollToTop';
import Footer from '../components/Footer';
import Header from '../components/Header';
import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

const Layout: React.FC = (): JSX.Element => {
  return (
    <main className='h-full w-full flex flex-col'>
      <AutomaticScrollToTop />
      <ScrollToTop />
      <Header />
      <section className='flex-auto p-5'>
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
