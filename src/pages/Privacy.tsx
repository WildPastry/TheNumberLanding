import type { JSX } from 'react';

const Privacy: React.FC = (): JSX.Element => {
  return (
    <section className='w-700 m-auto max783:w-auto'>
      <div className='mb-5 min674:my-10'>
        <h2 className='text-2xl text-center'>Privacy statement</h2>
      </div>
      <p className='text:md min674:text-xl leading-8'>
        JustForToday respects your privacy and is committed to protecting your
        personal information. This Privacy Statement outlines how we collect,
        use, and safeguard your data when you use our mobile application.
      </p>
      <hr className='h-px my-10 bg-gray-600 border-0' />
      <div className='mb-10'>
        <h3 className='text-lg text-spotBlue mb-2'>DATA COLLECTION</h3>
        <p className='text-md'>
          We want to reassure our users that JustForToday does not collect any
          personal data or information from you while you use our mobile
          application. We do not gather any data about your device, usage
          patterns, or any other information that could potentially identify
          you.
        </p>
      </div>
      <div className='mb-10'>
        <h3 className='text-lg text-spotBlue mb-2'>DATA USAGE</h3>
        <p className='text-md'>
          Since we do not collect any data, we do not use your personal
          information for any purpose.
        </p>
      </div>
      <div className='mb-10'>
        <h3 className='text-lg text-spotBlue mb-2'>DATA SHARING</h3>
        <p className='text-md'>
          We do not share any data, personal or otherwise, with third parties.
          Your information is not disclosed, sold, or rented to any external
          entities.
        </p>
      </div>
      <div className='mb-10'>
        <h3 className='text-lg text-spotBlue mb-2'>CHANGES</h3>
        <p className='text-md'>
          We reserve the right to update this Privacy Statement from time to
          time. Any changes will be reflected on this page.
        </p>
      </div>
      <div className='mb-10'>
        <h3 className='text-lg text-spotBlue mb-2'>CONTACT US</h3>
        <p className='text-md mb-2'>
          If you have any questions or concerns regarding this Privacy Statement
          or the privacy practices of JustForToday, please contact us
          <a className='ml-1' href='mailto:justfortoday@mikeparker.co.nz'>
            here
          </a>
          .
        </p>
        <p className='text-md'>
          By using JustForToday, you signify your acceptance of this Privacy
          Statement. If you do not agree to this Privacy Statement, please
          refrain from using our mobile application. Thank you for trusting
          JustForToday with your privacy.
        </p>
      </div>
    </section>
  );
};

export default Privacy;
