import Badges from '../components/Badges';
import type { JSX } from 'react';
import TheNumber from '../components/TheNumber';

const Home: React.FC = (): JSX.Element => {
  return (
    <section
      aria-labelledby='home-title'
      className='h-full w-full flex flex-col'>
      <div className='flex flex-col flex-auto justify-center items-center'>
        <TheNumber />
        <Badges />
      </div>
      <div className='flex flex-col justify-end items-end'>
        {/* Sub title */}
        <div className='bg-(--main-banner) py-2 px-3 max-600:py-1 max-600:px-2'>
          <h2 className='text-(--bg) pt-1 text-3xl max-600:text-2xl'>
            A date tracking app
          </h2>
        </div>
        {/* Title */}
        <h1
          className='flex items-center font-cubano pt-1 gap-3 max-600:gap-2 mb-5'
          id='home-title'>
          <span className='pt-1 text-(--fg) text-5xl max-600:text-4xl'>
            THE
          </span>
          <span className='text-water text-8xl max-600:text-7xl'>NUMBER</span>
        </h1>
      </div>
    </section>
  );
};

export default Home;
