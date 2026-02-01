import Badges from '../components/Badges';
import type { JSX } from 'react';

const Home: React.FC = (): JSX.Element => {
  return (
    <section
      aria-labelledby='home-title'
      className='h-full w-full flex flex-col justify-center items-center'>
      {/* Title */}
      <h1 className='flex items-center gap-3 font-cubano pt-1' id='home-title'>
        <span className='text-(--fg) text-5xl'>THE</span>
        <span className='text-water text-100'>NUMBER</span>
      </h1>
      {/* Sub title */}
      <div className='py-2 px-3 bg-(--main-banner) mb-10'>
        <h2 className='text-(--bg) text-5xl pt-1'>A date tracking app</h2>
      </div>
      <Badges />
    </section>
  );
};

export default Home;
