import Image from 'next/image';

// components
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <section className='flex min-h-screen flex-col items-center justify-between p-10'>
      <div className='z-10 max-w-5xl w-full items-center justify-center text-sm lg:flex'>
        <>
          <Hero />
        </>
      </div>
    </section>
  );
}
