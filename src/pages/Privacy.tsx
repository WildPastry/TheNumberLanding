import type { JSX } from 'react';

const Privacy: React.FC = (): JSX.Element => {
  return (
    <section aria-labelledby='privacy-title' className='max-w-4xl m-auto'>
      <h1
        className='text-strawberry text-5xl max-400:text-4xl mb-5'
        id='privacy-title'>
        PRIVACY STATEMENT
      </h1>
      <p className='text-xl max-400:text-lg max-300:text-md'>
        The Number respects your privacy and is committed to protecting your
        personal information. This Privacy Statement outlines how we collect,
        use, and safeguard your data when you use our mobile application.
      </p>
      <hr
        aria-hidden='true'
        className='h-px my-10 bg-strawberry border-0 max-400:my-5'
      />
      <div className='mb-10 max-400:mb-5'>
        <h2 className='text-3xl text-strawberry mb-2'>DATA COLLECTION</h2>
        <p className='text-md'>
          We want to reassure our users that The Number does not collect any
          personal data or information from you while you use our mobile
          application. We do not gather any data about your device, usage
          patterns, or any other information that could potentially identify
          you.
        </p>
      </div>
      <div className='mb-10 max-400:mb-5'>
        <h2 className='text-3xl text-strawberry mb-2'>DATA USAGE</h2>
        <p className='text-md'>
          Since we do not collect any data, we do not use your personal
          information for any purpose.
        </p>
      </div>
      <div className='mb-10 max-400:mb-5'>
        <h2 className='text-3xl text-strawberry mb-2'>DATA SHARING</h2>
        <p className='text-md'>
          We do not share any data, personal or otherwise, with third parties.
          Your information is not disclosed, sold, or rented to any external
          entities.
        </p>
      </div>
      <div className='mb-10 max-400:mb-5'>
        <h2 className='text-3xl text-strawberry mb-2'>CHANGES</h2>
        <p className='text-md'>
          We reserve the right to update this Privacy Statement from time to
          time. Any changes will be reflected on this page.
        </p>
      </div>
      <div className='mb-10 max-400:mb-5'>
        <h2 className='text-3xl text-strawberry mb-2'>CONTACT US</h2>
        <p className='text-md mb-2'>
          If you have any questions or concerns regarding this Privacy Statement
          or the privacy practices of The Number, please contact us{' '}
          <a
            aria-label='Email thenumber@mikeparker.co.nz'
            className='ml-1 underline hover:text-strawberry'
            href='mailto:thenumber@mikeparker.co.nz'>
            here.
          </a>
        </p>
      </div>
      <div>
        <h2 className='text-3xl text-strawberry mb-2'>AGREEMENT</h2>
        <p className='text-md'>
          By using The Number, you signify your acceptance of this Privacy
          Statement. If you do not agree to this Privacy Statement, please
          refrain from using our mobile application. Thank you for trusting The
          Number with your privacy.
        </p>
      </div>
    </section>
  );
};

export default Privacy;
