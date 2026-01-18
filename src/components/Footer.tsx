import type { JSX } from 'react';

const Footer: React.FC = (): JSX.Element => {
  // Get current date
  const currentDate: number = new Date().getFullYear();
  return (
    <section className='bg-strawberry'>
      <h1>FOOTER{currentDate}</h1>
    </section>
  );
};

export default Footer;
