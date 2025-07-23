import { socialLinksData } from '@/app/_data/socials';
import capitalize from '@/app/_utils/capitalize';
import fetchSanityData from '@/lib/sanity/fetch';
import Link from 'next/link';

async function Footer() {
  const hero = await fetchSanityData('hero');
  const socialLinks = await fetchSanityData('socials');
  const socials = [
    ...(socialLinks.platforms || []),
    ...(socialLinks.customPlatforms || []),
  ];

  const getIcon = (platform) => {
    const Icon = socialLinksData[platform]?.icon || socialLinksData.custom.icon;
    return <Icon className='w-8/10 h-8/10 text-blossom-light' />;
  };

  return (
    <footer className='flex-center gap-6 md:gap-8 xl:gap-10 px-6 pt-14 pb-12'>
      <Link
        href='/'
        alt='Return to home'
        className='w-full max-w-[128px] md:max-w-[180px] xl:max-w-[220px]'
      >
        <h4 className='text-cherry-dark font-black text-5xl md:text-[64px] xl:text-[80px] md:tracking-[0.2%] uppercase text-right'>
          {hero.firstName} {hero.lastName || ''}
        </h4>
      </Link>

      <div className='grid grid-cols-2 grid-rows-2 gap-1 aspect-square w-fit'>
        {socials.map((link) => (
          <div
            key={link._key}
            className='w-12 h-12 md:w-16 md:h-16 p-1 bg-cherry-dark rounded-2xl hover:bg-bigarreau transition-colors duration-200 ease-in'
          >
            <a
              href={link.url}
              title={capitalize(link.platform)}
              aria-label={`Link to ${link.platform}`}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-center w-full h-full'
            >
              {getIcon(link.platform)}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
