import { Post } from '@/types/post';
import Image from 'next/image';
import Link from 'next/link';

type PostProps = {
  post: Post;
};

export default function PostCard({
  post: { title, description, date, category, path },
}: PostProps) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='overflew-hidden rounded-md shadow-lg'>
        <Image
          className='w-full'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className='flex flex-col items-center p-4'>
          <time className='self-end text-sm'>{date.toString()}</time>
          <h3 className='text-medium font-bold truncate'>{title}</h3>
          <p className='w-full truncate text-center text-sm'>{description}</p>
          <span className='text-sm rounded-full bg-amber-100 px-2.5 my-2'>
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
