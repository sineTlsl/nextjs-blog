import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center p-4 text-stone-800 border-b'>
      <Link href='/'>
        <h1 className='text-2xl font-semibold'>{"Sine's Blog"}</h1>
      </Link>
      <nav className='flex gap-4'>
        <Link href='/'>home</Link>
        <Link href='/about'>about</Link>
        <Link href='/posts'>posts</Link>
        <Link href='/contact'>contact</Link>
      </nav>
    </header>
  );
}
