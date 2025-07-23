import { GrInstagram, GrLinkedin } from 'react-icons/gr';
import {
  FaBehance,
  FaDribbble,
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaExternalLinkAlt,
  FaTiktok,
  FaTwitch,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const socialLinksData = {
  custom: {
    title: 'Custom',
    href: 'https://www.custom.com/',
    icon: FaExternalLinkAlt,
  },
  behance: {
    title: 'Behance',
    href: 'https://www.behance.net/',
    icon: FaBehance,
  },
  discord: {
    title: 'Discord',
    href: 'https://www.discord.com/',
    icon: FaDiscord,
  },
  dribbble: {
    title: 'Dribbble',
    href: 'https://www.dribbble.com/',
    icon: FaDribbble,
  },
  facebook: {
    title: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: FaFacebook,
  },
  github: {
    title: 'GitHub',
    href: 'https://www.github.com/',
    icon: FaGithub,
  },
  instagram: {
    title: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: GrInstagram,
  },
  linkedin: {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: GrLinkedin,
  },
  tiktok: {
    title: 'TikTok',
    href: 'https://www.tiktok.com/',
    icon: FaTiktok,
  },
  twitch: {
    title: 'Twitch',
    href: 'https://www.twitch.tv/',
    icon: FaTwitch,
  },
  xtwitter: {
    title: 'X (Twitter)',
    href: 'https://www.x.com/',
    icon: FaXTwitter,
  },
};
