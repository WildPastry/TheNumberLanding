import { AutomaticScrollToTop } from '../components/AutomaticScrollToTop';
import Footer from '../components/Footer';
import Header from '../components/Header';
import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

const Layout: React.FC = (): JSX.Element => {
  return (
    <div className='h-full w-full flex flex-col'>
      {/* Behaviours */}
      <AutomaticScrollToTop />
      <ScrollToTop />
      {/* Landmarks */}
      <Header />
      <main
        aria-label='Main content'
        className='flex-auto p-5'
        id='main-content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
