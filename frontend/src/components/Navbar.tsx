import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const userName = "John Doe"; 

  return (
    <nav className="h-12 flex items-center gap-6 px-4 bg-[#161D26] text-white">
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <Image src="/logo.svg" alt="Route 53" width={28} height={28} />
      </Link>

      <input
        type="search"
        placeholder="Search"
        className="w-full max-w-md h-8 px-3 rounded bg-white/10 text-sm placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="ml-auto flex items-center gap-2 shrink-0 text-sm">
        {userName}
      </div>
    </nav>
  );
}