import fetchSanityData from '@/lib/sanity/fetch';
import Carousel from './Carousel';

async function Work() {
  const work = await fetchSanityData('portfolio');
  const { projects } = work;

  return (
    <section
      className='
        flex-col-center w-full bg-cherry-dark
        px-4 md:px-6 lg:px-12
        pt-14 pb-24 md:pb-32 xl:pt-20 xl:pb-50'
    >
      <h2 className='pb-19 xl:pb-28'>Work</h2>

      <section className='flex-col gap-20 w-full  max-w-content-xl mx-auto'>
        {projects.map((project) => (
          <di key={project._key} className='w-full h-full'>
            <h3 className='pl-4 xl:pl-8 text-blossom pb-6 md:pb-7 xl:pb-10'>
              {project.title}
            </h3>
            <Carousel slides={project.images} options={{ loop: true }} />
          </di>
        ))}
      </section>
    </section>
  );
}

export default Work;
