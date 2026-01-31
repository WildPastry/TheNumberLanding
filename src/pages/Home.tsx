import Badges from '../components/Badges';
import type { JSX } from 'react';

const Home: React.FC = (): JSX.Element => {
  return (
    <section className='h-full w-full flex flex-col justify-center items-center'>
      <div className='flex items-center gap-3'>
        <h1 className='text-(--fg) font-cubano text-5xl pt-1'>THE</h1>
        <h1 className='text-water font-cubano text-100'>NUMBER</h1>
      </div>
      <div className='py-2 px-3 bg-(--main-banner) mb-10'>
        <h2 className='text-(--bg) text-5xl pt-1'>A date tracking app</h2>
      </div>
      <Badges />
    </section>
  );
};

export default Home;
