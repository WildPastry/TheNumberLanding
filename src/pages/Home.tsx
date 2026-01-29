import Badges from '../components/Badges';
import type { JSX } from 'react';

const Home: React.FC = (): JSX.Element => {
  return (
    <section className='h-full w-full flex flex-col justify-center items-center'>
      <h1 className='text-water font-cubano text-100'>THE NUMBER</h1>
      <div className='py-2 px-3 bg-lemon mb-10'>
        <h2 className='text-prmary-dark font-bebas text-5xl'>
          A basic date tracking app
        </h2>
      </div>
      <Badges />
    </section>
  );
};

export default Home;
