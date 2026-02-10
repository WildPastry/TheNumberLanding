import type { JSX } from 'react';

const Label: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col justify-end items-end mt-5 gap-1'>
      {/* Sub title */}
      <div className='bg-(--main-banner) py-2 px-3 max-600:py-1 max-600:px-2'>
        <h2 className='font-bebas text-(--bg) pt-1 text-4xl max-600:text-3xl max-400:text-2xl'>
          A date tracking app
        </h2>
      </div>
      {/* Title */}
      <h1 className='flex items-center gap-2 max-600:gap-1' id='home-title'>
        <span className='font-bebas pt-4 text-(--fg) text-6xl max-600:text-5xl max-400:text-4xl max-300:text-3xl'>
          THE
        </span>
        <span className='text-water text-8xl max-600:text-7xl max-400:text-6xl max-300:text-5xl'>
          NUMBER
        </span>
      </h1>
    </div>
  );
};

export default Label;
