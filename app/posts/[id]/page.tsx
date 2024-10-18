import UpvoteBtn from "@/components/upvote-btn";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const Post = async ({ params }: Props) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!post) {
    return notFound();
  }

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>

      <UpvoteBtn />
    </main>
  );
};

export default Post;
