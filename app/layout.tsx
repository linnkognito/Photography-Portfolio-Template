import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import './_styles/embla.css';
import './globals.css';

const kumbhSans = Kumbh_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jane Doe | Portfolio',
  description: "Jane Doe's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir='ltr' className={`${kumbhSans.variable} antialiased`}>
      <body className='relative aspect-auto w-full max-w-screen min-h-screen scrollbar-gutter-stable overflow-x-hidden'>
        <div className='absolute top-0 right-0 block sm:hidden'>XSMALL</div>
        <div className='absolute top-0 right-20 hidden sm:block md:hidden'>
          SMALL
        </div>
        <div className='absolute top-0 right-40 hidden md:block lg:hidden'>
          MEDIUM
        </div>
        <div className='absolute top-0 right-60 hidden lg:block xl:hidden'>
          LARGE
        </div>
        <div className='absolute top-0 right-80 hidden xl:block'>XLARGE</div>

        {children}
      </body>
    </html>
  );
}
