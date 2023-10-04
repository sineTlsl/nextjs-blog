export default function PostsPage({ params }: { params: { slug: string } }) {
  return <h1>{params.slug} Page!!</h1>;
}
