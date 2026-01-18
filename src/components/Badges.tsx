import type { JSX } from 'react';
import appleStoreBadge from './../assets/img/apple.svg';
import googeStoreBadge from './../assets/img/google.svg';

const Badges: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className='align-bottom inline-block me-10'>
        <a
          className='align-bottom inline-block'
          href='https://apps.apple.com'
          target='_blank'
          rel='noopener noreferrer'>
          <img className='h-12' src={appleStoreBadge} alt='Apple Store Badge' />
        </a>
      </div>
      <div className='align-bottom inline-block'>
        <a
          className='align-bottom inline-block'
          href='https://play.google.com/store'
          target='_blank'
          rel='noopener noreferrer'>
          <img className='h-12' src={googeStoreBadge} alt='Googe Store Badge' />
        </a>
      </div>
    </section>
  );
};

export default Badges;
