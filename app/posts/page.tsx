import PostsList from "@/components/posts-list";
import { SkeletonCard } from "@/components/SkeletonCard";
import { Suspense } from "react";

const Posts = async () => {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5"> All Posts </h1>
      <Suspense fallback={<SkeletonCard />}>
        <PostsList />
      </Suspense>
    </main>
  );
};

export default Posts;
