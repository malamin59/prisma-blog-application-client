"use client";

import { ModeToggle } from "@/components/layout/ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}    
        <Link href="/" className="text-lg font-bold">
          AlAminDev
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:text-yellow-400 transition ${
                pathname === link.path ? "text-yellow-400 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <Link
            href="/signin"
            className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition"
          >
            Sign Up
          </Link>
        </div>
        <ModeToggle/>
      </div>
    </nav>
  );
}
