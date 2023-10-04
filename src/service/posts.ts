import path from 'path';
import { readFile } from 'fs/promises';
import { PostType } from '@/types/post';

/** 전체 포스팅 글 가져오기 */
export async function getAllPosts(): Promise<PostType[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await readFile(filePath, 'utf-8').then<PostType[]>(JSON.parse);

  return data.sort((a, b) => (a.date > b.date ? -1 : 1)); // 최신순 정렬
}

/** featured가 true인 포스트들만 가져오기 */
export async function getFeaturedPosts(): Promise<PostType[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

/** featured가 false인 포스트들만 가져오기 */
export async function getNonFeaturedPosts(): Promise<PostType[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}
