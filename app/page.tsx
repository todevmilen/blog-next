import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        Welcome to my blog
      </h1>
      <p className="max-w-[750px] mx-auto leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
        voluptatem saepe deserunt voluptatum adipisci in ipsam! Impedit velit
        alias sed sunt corporis ad necessitatibus minima illum perspiciatis
        deleniti, et a.{" "}
      </p>
    </main>
  );
}
