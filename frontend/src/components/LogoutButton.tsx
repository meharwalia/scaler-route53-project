"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiFetch } from "@/lib/app";

export default function LogoutButton() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogout() {
    setError(null);
    setLoggingOut(true);

    try {
      await apiFetch("/api/v1/auth/logout", { method: "POST" });
      router.replace("/login");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Logout failed");
      setLoggingOut(false);
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loggingOut}
      title={error ?? undefined}
      className="h-8 px-3 rounded border border-white/30 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {error ? "Retry logout" : loggingOut ? "Logging out..." : "Log out"}
    </button>
  );
}
