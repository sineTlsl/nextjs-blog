import path from 'path';
import { readFile } from 'fs/promises';
import { Post, PostData } from '@/types/post';
import { cache } from 'react';

/** 전체 포스팅 글 가져오기 */
export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await readFile(filePath, 'utf-8').then<Post[]>(JSON.parse);

  return data.sort((a, b) => (a.date > b.date ? -1 : 1)); // 최신순 정렬
});

/** featured가 true인 포스트들만 가져오기 */
export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

/** featured가 false인 포스트들만 가져오기 */
export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

/** 파일 경로를 받아 같은 이름의 md 파일 불러오기 */
export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post) {
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  }

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const content = await readFile(filePath, 'utf-8');

  return { ...post, next, prev, content };
}
