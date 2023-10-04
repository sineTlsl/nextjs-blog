import Image from 'next/image';

// components
import MyProfile from '@/components/MyProfile';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-10'>
      <div className='z-10 max-w-5xl w-full items-center justify-center font-sans text-sm lg:flex'>
        <>
          <MyProfile />
        </>
      </div>
    </main>
  );
}
