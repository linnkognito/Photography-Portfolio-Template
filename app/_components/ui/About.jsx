import Image from 'next/image';
import PhotoFrame from './PhotoFrame';
import Button from './Button';
import fetchSanityData from '@/lib/sanity/fetch';
import urlFor from '@/lib/sanity/urlFor';

async function About() {
  const about = await fetchSanityData('about');
  const { heading, image, bio, buttonLabel } = about;

  console.log(image);

  return (
    <section
      className='
    flex-col-center w-full max-w-content-xl mx-auto
    px-4 md:px-6 lg:px-12
    pt-14 pb-16 md:pb-24 lg:pt-20 lg:pb-32
    '
    >
      <h2 className='pb-10 md:pb-24 text-cherry'>{heading || 'About'}</h2>

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
              src={urlFor(image.asset._ref).url()}
              alt={'Profile Picture'}
              fill
              sizes='100vw'
              className='object-cover'
            />
          </div>
        </PhotoFrame>

        <div className='flex flex-col justify-around items-center gap-16 md:gap-10 xl:gap-12  w-full h-full'>
          <div className='bg-bigarreau px-8 py-10 md:px-12 xl:px-16 xl:py-12 rounded-img'>
            <p className='text-body text-center md:text-justify md:hyphens-auto'>
              {bio}
            </p>
          </div>

          <Button>{buttonLabel || "Let's Talk"}</Button>
        </div>
      </section>
    </section>
  );
}

export default About;
