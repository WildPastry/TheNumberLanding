import type { JSX } from 'react';

const Footer: React.FC = (): JSX.Element => {
  // Get current date
  const currentDate: number = new Date().getFullYear();
  return (
    <section className='p-5 shrink-0'>
      <div className='flex justify-end gap-1'>
        <p className='font-outfit-light text-l'>© {currentDate}</p>
        <a
          className='font-outfit-light text-l text-vanilla hover:text-lemon'
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
