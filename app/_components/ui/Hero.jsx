import Image from 'next/image';

function Hero() {
  return (
    <section
      className='
        flex-col justify-between lg:grid lg:grid-cols-2 lg:gap-10 w-full h-screen max-h-[580px] md:max-h-[834px] lg:max-h-[500px] lg:min-h-fit max-lg:min-h-fit
        px-4 sm:px-6 lg:px-9 pt-18 pb-12 sm:py-28 lg:py-9 lg:p-8
        bg-cherry-dark
    '
    >
      <div className='flex-col items-center justify-center min-h-fit max-lg:pb-10 max-lg:pl-10'>
        <h1 className='w-fit flex flex-wrap uppercase'>
          <span className='lg:hidden'>Jane Doe</span>

          <span className='flex flex-col mx-auto max-lg:hidden leading-none'>
            <span className='text-right pb-10'>Jane</span>
            <span className='text-right lg:-mt-[70px]'>Doe</span>
          </span>
        </h1>

        <h2 className='text-subheading -mt-[6px] pl-[16px] md:pl-9 font-semibold tracking-[0.2%]'>
          Street photographer
        </h2>
      </div>

      <Image
        src='/hero.jpg'
        alt='Hero'
        width={0}
        height={0}
        priority
        sizes='100vw'
        className='w-full h-auto lg:h-full lg:w-auto rounded-img'
      />
    </section>
  );
}

export default Hero;
