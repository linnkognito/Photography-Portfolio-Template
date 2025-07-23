import { sanityClient } from './client';

export default async function fetchSanityData(document = '') {
  try {
    const data = await sanityClient.fetch(`*[_type == "${document}"]`);

    if (!data || data.length === 0) throw new Error('Failed to fetch data');

    return data[0];
  } catch (err) {
    console.error('Error fetching Sanity data:', err);
    return null;
  }
}
