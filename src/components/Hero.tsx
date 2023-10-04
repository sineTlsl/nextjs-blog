'use client';

import Image from 'next/image';
import profileImg from '../../public/images/my-profile.jpg';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='text-center py-6'>
      <Image
        className='rounded-full mx-auto'
        src={profileImg}
        alt='profile'
        width={200}
        height={200}
      />
      <h2 className='text-2xl font-bold mt-2'>Hi, I&apos;m Sine</h2>
      <p className='font-semibold text-medium'>Front-End Developer</p>
      <p className='text-gray-700 text-sm'>
        지속적으로 학습하고 성장하는 것을 추구합니다.
      </p>
      <Link href='/contact'>
        <button className='bg-gray-600 hover:bg-gray-700 active:bg-gray-800 font-bold text-white rounded-xl py-1.5 px-4 mt-2'>
          Contact Me!
        </button>
      </Link>
    </section>
  );
}
