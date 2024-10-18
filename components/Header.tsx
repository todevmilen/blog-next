"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create Post",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center py-4 px-3 border-b">
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="Logo"
          className="w-[35px] h-[35px]"
          width="35"
          height="35"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-3 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href} className="inline-block mx-4">
              <Link
                className={` ${
                  pathname === link.href
                    ? "text-zinc-900 font-bold"
                    : "text-zinc-400"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
