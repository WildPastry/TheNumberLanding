import Badges from '../components/Badges';
import type { JSX } from 'react';

const Home: React.FC = (): JSX.Element => {
  return (
    <section
      aria-labelledby='home-title'
      className='h-full w-full flex flex-col justify-center items-center'>
      {/* Title */}
      <h1
        className='flex items-center font-cubano pt-1 gap-3 max-600:gap-2 mb-5'
        id='home-title'>
        <span className='pt-1 text-(--fg) text-5xl max-600:text-4xl'>THE</span>
        <span className='text-water text-8xl max-600:text-7xl'>NUMBER</span>
      </h1>
      {/* Sub title */}
      <div className='bg-(--main-banner) mb-10 py-2 px-3 max-600:py-1 max-600:px-2'>
        <h2 className='text-(--bg) pt-1 text-5xl max-600:text-4xl'>
          A date tracking app
        </h2>
      </div>
      <Badges />
    </section>
  );
};

export default Home;
