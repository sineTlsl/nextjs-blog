'use client';

import { PostType } from '@/types/post';
import { useState } from 'react';

// components
import Categories from '@/components/Categories';
import PostsGrid from '@/components/PostsGrid';

type Props = {
  posts: PostType[];
  categories: string[];
};

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);

  let filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className='flex m-4'>
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
