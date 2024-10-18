import Link from "next/link";

const PostsList = async () => {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();
  return (
    <ul>
      {data.posts.map((post: any) => (
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
