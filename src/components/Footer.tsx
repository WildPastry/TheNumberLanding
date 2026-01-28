import type { JSX } from 'react';

const Footer: React.FC = (): JSX.Element => {
  // Get current date
  const currentDate: number = new Date().getFullYear();
  return (
    <section className='absolute right-3 bottom-3'>
      <div className='flex gap-1'>
        <p className='font-outfit-light text-l'>© {currentDate}</p>
        <a
          className='font-outfit-light text-l text-flame hover:text-watermelon'
          href='https://mikeparker.co.nz/'
          rel='noopener noreferrer'
          target='_blank'>
          Mike Parker
        </a>
      </div>
    </section>
  );
};

export default Footer;
