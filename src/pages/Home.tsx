import Badges from '../components/Badges';
import type { JSX } from 'react';
import TheLabel from '../components/TheLabel';
import TheNumber from '../components/TheNumber';

const Home: React.FC = (): JSX.Element => {
  return (
    <section
      aria-labelledby='home-title'
      className='h-full w-full flex flex-col'>
      <div className='flex flex-col flex-auto justify-center items-center'>
        {/* Main number and badges */}
        <TheNumber />
        <Badges />
      </div>
      <div className='flex flex-col justify-end items-end mt-5'>
        {/* Tiel and sub title */}
        <TheLabel />
      </div>
    </section>
  );
};

export default Home;
