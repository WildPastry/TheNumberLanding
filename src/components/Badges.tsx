import { focusRing, linkButtonBase } from '../styles/uiClasses';
import type { JSX } from 'react';
import appleStoreBadge from './../assets/img/apple.svg';
import googleStoreBadge from './../assets/img/google.svg';
import { joinClass } from '../utils/joinClass';

const Badges: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Download links' className='flex gap-8 justify-center'>
      {/* Apple */}
      <a
        aria-label='Download on the App Store (opens in a new tab)'
        className={joinClass(linkButtonBase, focusRing)}
        href='https://apps.apple.com/us/app/thenumbernz/id6759034720'
        rel='noopener noreferrer'
        target='_blank'
        title='Download on the App Store'>
        <img alt='' aria-hidden='true' className='h-12' src={appleStoreBadge} />
      </a>
      {/* Google */}
      <a
        aria-label='Get it on Google Play (opens in a new tab)'
        className={joinClass(linkButtonBase, focusRing)}
        href='https://play.google.com/store/apps/details?id=nz.co.mikeparker.thenumber'
        rel='noopener noreferrer'
        target='_blank'
        title='Get it on Google Play'>
        <img
          alt=''
          aria-hidden='true'
          className='h-12'
          src={googleStoreBadge}
        />
      </a>
    </section>
  );
};

export default Badges;
