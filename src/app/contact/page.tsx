import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: '싱니에게 메일 보내기',
};

// icons
import { FaGithub, FaGithubAlt, FaInstagram } from 'react-icons/fa';

const LINKS = [
  { icon: <FaGithub />, url: 'https://github.com/sineTlsl' },
  { icon: <FaGithubAlt />, url: 'https://sinetlsl.github.io/' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/si__eun_s' },
];

export default function ContactPage() {
  return (
    <section className='flex flex-col items-center m-4'>
      <h2 className='text-2xl font-bold text-gray-800'>Contact Me</h2>
      <p className='py-2'>limsieun0313@gmail.com</p>
      <ul className='flex gap-3 mb-8'>
        {LINKS.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='text-4xl hover:text-amber-500'
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <div className='flex flex-col items-center gap-3 w-full'>
        <h2 className='text-2xl font-bold text-gray-800 text-center'>
          Or Send me an email
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
