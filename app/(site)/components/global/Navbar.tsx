import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/coding.png";

export default function Navbar() {
  return (
    <header className="py-4 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex">
            <Image src={Logo} width={40} height={40} alt="logo" />
            <div className="border-l border-zinc-500 pl-2">
              <p className="-mb-2">Zaki Coder</p>
              <small className="text-xs text-gray-600">Coding dreams into reality</small>
            </div>
          </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}