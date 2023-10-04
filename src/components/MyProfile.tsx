'use client';

import Image from 'next/image';

export default function MyProfile() {
  return (
    <div className='flex flex-col items-center justify-center text-gray-900'>
      <Image
        className='rounded-full'
        src='/images/my-profile.jpg'
        alt='profile'
        width={200}
        height={200}
      />
      <h3 className='text-2xl font-bold'>Hi, I&apos;m Sine</h3>
      <p className='font-medium text-base'>Front-End Developer</p>
      <p className='text-gray-700 pb-1 text-sm'>
        지속적으로 학습하고 성장하는 것을 추구합니다.
      </p>
      <button className='bg-gray-600 hover:bg-gray-700 active:bg-gray-800 font-bold text-white rounded-full py-1.5 px-4'>
        Contact Me!
      </button>
    </div>
  );
}
