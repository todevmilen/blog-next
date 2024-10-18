import prisma from "@/lib/db";
import Link from "next/link";

const PostsList = async () => {
  const posts = await prisma.post.findMany();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="text-left border-b py-5">
          <Link href={`/posts/${post.id}`} className="text-2xl font-bold">
            {post.title}
          </Link>
          <p className="text-lg">{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
