"use client"; 

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/hosted-zones", label: "Hosted zones" },
  { href: "/health-checks", label: "Health checks" },
];

export default function Sidebar({ open }: { open: boolean }) {
  return (
    <aside
      className={`${open ? "w-56 border-r" : "w-0"} shrink-0 overflow-hidden border-neutral-300 transition-all duration-200`}
    >
      <ul className="w-56 flex flex-col gap-1 p-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="block rounded px-3 py-2 text-sm hover:bg-neutral-200">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}