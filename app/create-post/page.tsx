import { Button } from "@/components/ui/button";
import React from "react";

const CreatePost = () => {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
      <form className="h-10 space-x-2 mt-10">
        <input
          className="border rounded px-3 h-full"
          type="text"
          name="title"
          required
          placeholder="Title for new post"
        />
        <Button variant="outline" className="h-full px-5 rounded">
          Submit
        </Button>
      </form>
    </main>
  );
};

export default CreatePost;
