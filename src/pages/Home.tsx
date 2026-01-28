import Badges from '../components/Badges';
import type { JSX } from 'react';

const Home: React.FC = (): JSX.Element => {
  return (
    <section className='h-full w-full flex flex-col justify-center items-center'>
      <h1 className='text-vanilla font-cubano text-100'>THE NUMBER</h1>
      <Badges />
    </section>
  );
};

export default Home;
