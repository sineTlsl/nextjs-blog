// components
import Hero from '@/components/Hero';

const TITLE_CLASS = 'text-xl font-bold text-gray-800 my-2';
export default function AboutPage() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <section className='text-center bg-gray-100 shadow-lg rounded-md p-8 m-8'>
        <div className='mb-4'>
          <h3 className={TITLE_CLASS}>Who Am I?</h3>
          <p>
            어제보다 오늘이 더 나은 개발자 <br /> 새로운 지식을 습득하는 것을
            좋아함
          </p>
        </div>
        <div>
          <h3 className={TITLE_CLASS}>Skills</h3>
          <p>
            JavaScript, TypeScript <br /> React, Node, AWS
          </p>
        </div>
      </section>
    </div>
  );
}
