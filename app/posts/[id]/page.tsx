import UpvoteBtn from "@/components/upvote-btn";

type Props = {
  params: {
    id: string;
  };
};

const Post = async ({ params }: Props) => {
  const response = await fetch(`https://dummyjson.com/post/${params.id}`);
  const post = await response.json();

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>

      <UpvoteBtn />
    </main>
  );
};

export default Post;
