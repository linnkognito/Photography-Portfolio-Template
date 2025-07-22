import Link from 'next/link';
import { FaTiktok } from 'react-icons/fa';
import { GrInstagram, GrLinkedin, GrTwitter } from 'react-icons/gr';

function Footer() {
  const socialLinks = [
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: <GrInstagram className='w-8/10 h-8/10 text-blossom-light' />,
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: (
        <GrLinkedin className='w-8/10 h-8/10 text-blossom-light rounded-lg' />
      ),
    },
    {
      title: 'TikTok',
      href: 'https://www.tiktok.com/',
      icon: <FaTiktok className='w-8/10 h-8/10 text-blossom-light' />,
    },
    {
      title: 'Twitter',
      href: 'https://www.twitter.com/',
      icon: <GrTwitter className='w-8/10 h-8/10 text-blossom-light' />,
    },
  ];

  return (
    <footer className='flex-center gap-6 md:gap-8 xl:gap-10 px-6 pt-14 pb-12'>
      <Link
        href='/'
        alt='Return to home'
        className='w-full max-w-[128px] md:max-w-[180px] xl:max-w-[220px]'
      >
        <h4 className='text-cherry-dark font-black text-5xl md:text-[64px] xl:text-[80px] md:tracking-[0.2%] uppercase text-right'>
          Jane Doe
        </h4>
      </Link>

      <div className='grid grid-cols-2 grid-rows-2 gap-1 aspect-square w-fit'>
        {socialLinks.map((link) => (
          <div
            key={link.title}
            className='w-12 h-12 md:w-16 md:h-16 p-1 bg-cherry-dark rounded-2xl hover:bg-bigarreau transition-colors duration-200 ease-in'
          >
            <a
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-center w-full h-full'
            >
              {link.icon}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
