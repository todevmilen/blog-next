"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

type Props = {
  title: string;
  body: string;
};

export async function createPost(data: Props) {
  await prisma.post.create({
    data: {
      title: data.title,
      body: data.body,
    },
  });

  revalidatePath("/posts");
}
