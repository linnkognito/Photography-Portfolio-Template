import Carousel from './Carousel';

function Work() {
  const testSlides = [
    { src: '/img-1.jpg', alt: 'Image 1' },
    { src: '/img-2.jpg', alt: 'Image 2' },
    { src: '/img-3.jpg', alt: 'Image 3' },
    { src: '/img-4.jpg', alt: 'Image 4' },
  ];

  const testSlides2 = [
    { src: '/img-5.jpg', alt: 'Image 5' },
    { src: '/img-6.jpg', alt: 'Image 6' },
    { src: '/img-7.jpg', alt: 'Image 7' },
  ];

  return (
    <section
      className='
        flex-col-center w-full bg-cherry-dark
        px-4 md:px-6 lg:px-12
        pt-14 pb-24 md:pb-32 xl:pt-20 xl:pb-50'
    >
      <h2 className='pb-19 xl:pb-28'>Work</h2>

      <section className='flex-col gap-20 w-full  max-w-content-xl mx-auto'>
        <div className='w-full h-full'>
          <h3 className='pl-4 xl:pl-8 text-blossom pb-6 md:pb-7 xl:pb-10'>
            2025
          </h3>
          <Carousel slides={testSlides} options={{ loop: false }} />
        </div>

        <div className='w-full h-full'>
          <h3 className='pl-4 xl:pl-8 text-blossom pb-6 md:pb-7 xl:pb-10'>
            2024
          </h3>
          <Carousel slides={testSlides2} options={{ loop: false }} />
        </div>
      </section>
    </section>
  );
}

export default Work;
