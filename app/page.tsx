import Hero from './_components/ui/Hero';
import About from './_components/ui/About';
import Work from './_components/ui/Work';
import Footer from './_components/ui/Footer';

export default function Home() {
  return (
    <main className='w-full'>
      <Hero />
      <About />
      <Work />
      <Footer />
    </main>
  );
}
