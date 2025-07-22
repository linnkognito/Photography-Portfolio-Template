import Image from 'next/image';

function Hero() {
  return (
    <section
      className='
        flex-col items-center justify-between w-full h-screen
        px-4 md:px-6 lg:px-9 pt-18 pb-12 md:py-28 lg:py-9
        bg-cherry-dark
    '
    >
      <div>
        <h1 className='flex flex-wrap uppercase'>
          <span className='uppercase'>Jane Doe</span>
        </h1>
        <h2 className='-mt-[6px] pl-[16px] md:pl-9 font-semibold text-subheading tracking-[0.2%]'>
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
        className='w-full h-auto rounded-img'
      />
    </section>
  );
}

export default Hero;
