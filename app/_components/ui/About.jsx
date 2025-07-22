import Image from 'next/image';
import PhotoFrame from './PhotoFrame';
import Button from './Button';

function About() {
  return (
    <section
      className='
    flex-col-center w-full max-w-content-xl mx-auto
    px-4 md:px-6 lg:px-12
    pt-14 pb-16 md:pb-24 lg:pt-20 lg:pb-32
    '
    >
      <h2 className='pb-10 md:pb-24 text-cherry'>About</h2>

      <section
        className='
        flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 xl:gap-14 w-full max-md:max-w-[412px]
        md:pl-4 md:pr-8
        '
      >
        <PhotoFrame
          variant='cherry'
          className='w-full aspect-square md:aspect-[3/4]'
        >
          <div className='relative w-full h-full overflow-hidden rounded-img'>
            <Image
              src='/about.jpg'
              alt='Picture of a blond woman wearing a white tanktop and applying red lipstick'
              fill
              sizes='100vw'
              className='object-cover'
            />
          </div>
        </PhotoFrame>

        <div className='flex flex-col justify-around items-center gap-16 md:gap-10 xl:gap-12  w-full h-full'>
          <div className='bg-bigarreau px-8 py-10 md:px-12 xl:px-16 xl:py-12 rounded-img'>
            <p className='text-body text-center md:text-justify md:hyphens-auto'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <Button>Let's talk</Button>
        </div>
      </section>
    </section>
  );
}

export default About;
