import { Button } from "./ui/button";
import { createPost } from "@/actions/actions";

const Form = () => {
  return (
    <form
      className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
      action={createPost}
    >
      <input
        className="border rounded px-3 h-10"
        type="text"
        name="title"
        required
        placeholder="Title for new post"
      />
      <textarea
        name="body"
        placeholder="Body for new post"
        className="border rounded px-3 py-2"
        rows={6}
        required
      />
      <Button variant="outline" className=" h-10 px-5 rounded">
        Submit
      </Button>
    </form>
  );
};

export default Form;
