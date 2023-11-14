import { Post } from '@/types/post';
import PostCard from '@/components/PostCard';

type PostsProps = {
  posts: Post[];
};

export default function PostsGrid({ posts }: PostsProps) {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {posts.map((post) => (
        <li className='w-30' key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
