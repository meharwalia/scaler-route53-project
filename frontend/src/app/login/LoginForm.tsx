"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiFetch } from "@/lib/app";

const input =
  "w-full h-9 px-3 border border-neutral-400 bg-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500";
const link = "text-[#0972d3] font-semibold";
const btn = "h-9 w-full rounded-full text-sm font-bold";
const btnPrimary = `${btn} border border-[#FF9900] bg-[#FF9900] text-black hover:bg-[#EC7211] disabled:opacity-40 disabled:cursor-not-allowed`;
const btnSecondary = `${btn} border-2 border-[#0972d3] bg-white text-[#0972d3] hover:bg-blue-50`;

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = new FormData(e.currentTarget);

    try {
      await apiFetch("/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify({
          account_id: Number(form.get("account_id")),
          username: form.get("username"),
          password: form.get("password"),
        }),
      });
      router.push("/hosted-zones");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-3 rounded-2xl border border-neutral-300 bg-white p-5 text-sm"
    >
      <h1 className="text-xl font-bold">
        IAM user sign in <span className="text-[#0972d3] text-base">ⓘ</span>
      </h1>

      <label className="flex flex-col gap-1">
        Account ID
        <input
          name="account_id"
          type="text"
          inputMode="numeric"
          pattern="[0-9]+"
          required
          className={input}
        />
      </label>

      <label className="flex flex-col gap-1 font-semibold mt-2">
        IAM username
        <input
          name="username"
          type="text"
          autoComplete="username"
          required
          className={`${input} font-normal`}
        />
      </label>

      <label className="flex flex-col gap-1 font-semibold mt-2">
        Password
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className={`${input} font-normal`}
        />
      </label>

      {error && <p className="text-red-600">{error}</p>}

      <button type="submit" disabled={submitting} className={`${btnPrimary} mt-2`}>
        {submitting ? "Signing in..." : "Sign in"}
      </button>
      <button type="button" className={btnSecondary}>
        Sign in using root user email
      </button>
      <span className={`${link} text-center mt-1`}>Create a new AWS account</span>
    </form>
  );
}
