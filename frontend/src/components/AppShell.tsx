"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col flex-1">
      <div className="h-10 flex items-center gap-3 px-2 border-b border-neutral-300">
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
          className="h-8 w-8 flex flex-col items-center justify-center gap-1 rounded hover:bg-neutral-200"
        >
          <span className="h-0.5 w-5 bg-neutral-800" />
          <span className="h-0.5 w-5 bg-neutral-800" />
          <span className="h-0.5 w-5 bg-neutral-800" />
        </button>
        <Breadcrumb />
      </div>

      <div className="flex flex-1">
        <Sidebar open={open} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}