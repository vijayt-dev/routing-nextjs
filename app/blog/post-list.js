import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Design Patterns: A Guide to JavaScript Development Principles for Clean and Scalable Code",
    slug: "javaScript",
  },
  {
    id: 1,
    title: "Next.js 13.4: A Game-Changer for Front-End Development!",
    slug: "nextjs",
  },
];

export default function PostList() {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
