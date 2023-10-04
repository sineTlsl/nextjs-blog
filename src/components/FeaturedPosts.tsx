import PostsGrid from '@/components/PostsGrid';
import { getFeaturedPosts } from '@/service/posts';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className='flex flex-col w-full sm:px-4'>
      <h2 className='text-xl font-bold my-2 pl-2 sm:pl-0'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
