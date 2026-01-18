import type { JSX } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Badges from '../components/Badges';

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
