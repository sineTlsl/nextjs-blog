import { getAllPosts } from '@/service/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '기술 스택에 관련된 블로그 글',
};

// components
import FilterablePosts from '@/components/FilterablePosts';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}
