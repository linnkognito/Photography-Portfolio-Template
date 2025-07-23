import { sanityClient } from './client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

export default function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
