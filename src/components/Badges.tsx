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
          rel='noopener noreferrer'
          target='_blank'>
          <img alt='Apple Store Badge' className='h-12' src={appleStoreBadge} />
        </a>
      </div>
      <div className='align-bottom inline-block'>
        <a
          className='align-bottom inline-block'
          href='https://play.google.com/store'
          rel='noopener noreferrer'
          target='_blank'>
          <img alt='Googe Store Badge' className='h-12' src={googeStoreBadge} />
        </a>
      </div>
    </section>
  );
};

export default Badges;
