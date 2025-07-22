'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import PhotoFrame from './PhotoFrame';

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className='embla relative'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((image, index) => (
            <div
              className='embla__slide cursor-grab active:cursor-grabbing'
              key={index}
              onClick={() => emblaApi.scrollTo(index)}
            >
              <section role='group' key={image.alt}>
                {/* Image */}
                <PhotoFrame variant='blossom'>
                  <div className='relative aspect-4/3 rounded-img overflow-hidden'>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className='object-cover object-center'
                    />
                  </div>
                </PhotoFrame>
              </section>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
