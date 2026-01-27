import Badges from '../components/Badges';
import Footer from '../components/Footer';
import Header from '../components/Header';
import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = (): JSX.Element => {
  return (
    <main>
      <Header />
      <section>
        <Outlet />
      </section>
      <div>
        <Badges />
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
