"use client";
import { useState } from "react";
import { Button } from "./ui/button";

const UpvoteBtn = () => {
  const [upvoteCount, setUpvoteCount] = useState<number>(0);

  return (
    <Button
      className="mt-7 rounded-xl"
      variant="outline"
      onClick={() => setUpvoteCount(upvoteCount + 1)}
    >
      {upvoteCount} Upvote
    </Button>
  );
};

export default UpvoteBtn;
