import fetchSanityData from '@/lib/sanity/fetch';
import urlFor from '@/lib/sanity/urlFor';
import Image from 'next/image';

async function Hero() {
  const hero = await fetchSanityData('hero');
  const { firstName, lastName, subHeading, image } = hero;

  return (
    <section
      className='
        flex-col justify-between lg:grid lg:grid-cols-2 lg:gap-10 w-full h-screen max-h-[580px] md:max-h-[834px] lg:max-h-[500px] lg:min-h-fit max-lg:min-h-fit
        px-4 sm:px-6 lg:px-9 pt-18 pb-12 sm:py-28 lg:py-9 lg:p-8
        bg-cherry-dark
    '
    >
      <div className='flex-col max-sm:items-center max-sm:justify-center lg:justify-center min-h-fit max-lg:pb-[112px] sm:pl-10'>
        <h1 className='w-fit flex flex-wrap uppercase'>
          <span className='lg:hidden'>
            {firstName} {lastName || ''}
          </span>

          <span className='flex flex-col mx-auto max-lg:hidden leading-none'>
            <span className='text-right pb-10'>{firstName}</span>
            {lastName && (
              <span className='text-right lg:-mt-[70px]'>{lastName}</span>
            )}
          </span>
        </h1>

        <h2 className='text-subheading -mt-[6px] pl-7 md:pl-9 lg:pt-6 font-semibold tracking-[0.2%]'>
          {subHeading}
        </h2>
      </div>

      <Image
        src={urlFor(image).url()}
        alt='Hero Image'
        width={0}
        height={0}
        priority
        sizes='1000px'
        className='w-full h-auto lg:h-full lg:w-auto rounded-img'
      />
    </section>
  );
}

export default Hero;
