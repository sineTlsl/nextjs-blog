import { getNonFeaturedPosts } from '@/service/posts';

// components
import PostCard from '@/components/PostCard';
import MultiCarousel from '@/components/MultiCarousel';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className='my-4 pt-4 sm:px-4'>
      <h2 className='text-xl font-bold my-2 pl-2 sm:pl-0'>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
