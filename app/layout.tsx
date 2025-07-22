import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
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
        {children}
      </body>
    </html>
  );
}
