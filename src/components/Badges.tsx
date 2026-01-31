import type { JSX } from 'react';
import appleStoreBadge from './../assets/img/apple.svg';
import googeStoreBadge from './../assets/img/google.svg';

const Badges: React.FC = (): JSX.Element => {
  return (
    <section className='flex gap-8 justify-center'>
      <a
        href='https://apps.apple.com'
        rel='noopener noreferrer'
        target='_blank'>
        <img alt='Apple Store Badge' className='h-12' src={appleStoreBadge} />
      </a>
      <a
        href='https://play.google.com/store'
        rel='noopener noreferrer'
        target='_blank'>
        <img alt='Googe Store Badge' className='h-12' src={googeStoreBadge} />
      </a>
    </section>
  );
};

export default Badges;
