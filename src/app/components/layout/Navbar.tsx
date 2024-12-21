// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-100 border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">My Portfolio</span>
        </Link>
        <div className="space-x-4">
          <Link href="/about">
            <span className="hover:text-blue-500 cursor-pointer">About Me</span>
          </Link>
          <Link href="/projects">
            <span className="hover:text-blue-500 cursor-pointer">Projects</span>
          </Link>
          <Link href="/skills">
            <span className="hover:text-blue-500 cursor-pointer">Skills</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-blue-500 cursor-pointer">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
