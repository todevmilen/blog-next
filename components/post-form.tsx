"use client";
import { z } from "zod";
import { Button } from "./ui/button";
import { createPost } from "@/actions/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters long",
    })
    .max(100, {
      message: "Title must be at most 100 characters long",
    }),
  body: z
    .string()
    .min(10, {
      message: "Body must be at least 10 characters long",
    })
    .max(1000, {
      message: "Body must be at most 1000 characters long",
    }),
});

const PostForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const router = useRouter();
  const { toast } = useToast();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await createPost(data);
      toast({
        title: "Post created",
        description: "Your post has been created successfully",
        className: "bg-green-500 text-white rounded",
      });
      router.push("/posts");
    } catch (error) {
      console.error(error);
      toast({
        title: "Uh oh! Something went wrong",
        description: "Your post could not be created",
        variant: "destructive",
        className: "bg-red-500 text-white rounded",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border rounded px-3 h-10"
                  placeholder="Title"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-bold text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="border rounded px-3 py-2"
                  rows={6}
                  placeholder="Body"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-bold text-red-600" />
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline" className=" h-10 px-5 rounded">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default PostForm;
