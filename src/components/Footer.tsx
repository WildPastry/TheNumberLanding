import type { JSX } from 'react';

const Footer: React.FC = (): JSX.Element => {
  // Get current date
  const currentDate: number = new Date().getFullYear();
  return (
    <section className='absolute right-3 bottom-3'>
      <p className='font-outfit-bold text-xl'>BY MPARKERNZ {currentDate}</p>
    </section>
  );
};

export default Footer;
