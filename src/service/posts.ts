import path from 'path';
import { readFile } from 'fs/promises';
import { Post, PostData } from '@/types/post';

/** 전체 포스팅 글 가져오기 */
export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await readFile(filePath, 'utf-8').then<Post[]>(JSON.parse);

  return data.sort((a, b) => (a.date > b.date ? -1 : 1)); // 최신순 정렬
}

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
  const metadata = await getAllPosts().then((post) =>
    post.find((post) => post.path === fileName)
  );

  if (!metadata) {
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  }

  const content = await readFile(filePath, 'utf-8');

  return { ...metadata, content };
}
