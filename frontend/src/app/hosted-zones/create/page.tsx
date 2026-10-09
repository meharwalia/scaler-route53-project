"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiFetch } from "@/lib/app";
import type { HostedZone } from "@/types/hosted-zone";

const MAX_TAGS = 50;

const btn = "h-9 px-5 border text-sm font-medium rounded-full disabled:opacity-40 disabled:cursor-not-allowed";
const btnSecondary = `${btn} border-neutral-400 bg-white text-neutral-800 hover:bg-neutral-100 inline-flex items-center`;
const btnPrimary = `${btn} border-[#FF9900] bg-[#FF9900] text-black hover:bg-[#EC7211]`;
const inputClass =
  "h-9 px-3 border border-neutral-300 rounded text-sm outline-none focus:ring-2 focus:ring-blue-500";

``
type TagRow = { id: string; key: string; value: string };

export default function CreateHostedZonePage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [tags, setTags] = useState<TagRow[]>([]);

  function addTag() {
    if (tags.length >= MAX_TAGS) return;
    setTags([...tags, { id: crypto.randomUUID(), key: "", value: "" }]);
  }

  function updateTag(id: string, field: "key" | "value", text: string) {
    setTags(tags.map((tag) => (tag.id === id ? { ...tag, [field]: text } : tag)));
  }

  function removeTag(id: string) {
    setTags(tags.filter((tag) => tag.id !== id));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const domainName = String(formData.get("domain_name") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();
    const type = String(formData.get("type") ?? "public");

    const cleanTags = tags.map((tag) => ({ key: tag.key.trim(), value: tag.value.trim() }));

    if (!domainName) {
      setError("Domain name is required.");
      return;
    }
    if (cleanTags.some((tag) => !tag.key)) {
      setError("Every tag needs a key. Remove empty tags or fill them in.");
      return;
    }
    const keys = cleanTags.map((tag) => tag.key);
    if (new Set(keys).size !== keys.length) {
      setError("Tag keys must be unique.");
      return;
    }

    setIsPending(true);
    setError(null);

    try {
      await apiFetch<HostedZone>("/api/v1/hostedzones/", {
        method: "POST",
        body: JSON.stringify({
          domain_name: domainName,
          description: description || null,
          type,
          tags: cleanTags.length > 0 ? JSON.stringify(cleanTags) : null,
        }),
      });

      form.reset();
      setTags([]);
      setIsPending(false);
      router.push("/hosted-zones");
    } catch (err) {
      setError((err as Error).message);
      setIsPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">Create hosted zone</h1>

      <section className="flex flex-col gap-5 p-6 border border-neutral-300 rounded bg-white">
        <h2 className="text-lg font-semibold">Hosted zone configuration</h2>

        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium">Domain name</span>
          <span className="text-neutral-500">This is the name of the domain that you want to route traffic for.</span>
          <input name="domain_name" required placeholder="example.com" className={inputClass} />
        </label>

        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium">
            Description <span className="text-neutral-500 font-normal">- optional</span>
          </span>
          <span className="text-neutral-500">This value lets you distinguish hosted zones that have the same name.</span>
          <textarea
            name="description"
            rows={3}
            maxLength={256}
            placeholder="The hosted zone is used for..."
            className={`${inputClass} h-auto py-2`}
          />
        </label>

        <fieldset className="flex flex-col gap-2 text-sm">
          <legend className="font-medium mb-1">Type</legend>

          <label className="flex items-start gap-2 p-3 border border-neutral-300 rounded cursor-pointer has-checked:border-blue-500 has-checked:bg-blue-50">
            <input type="radio" name="type" value="public" defaultChecked className="mt-1" />
            <span>
              <span className="font-medium block">Public hosted zone</span>
              <span className="text-neutral-500">Determines how traffic is routed on the internet.</span>
            </span>
          </label>

          <label className="flex items-start gap-2 p-3 border border-neutral-300 rounded cursor-pointer has-checked:border-blue-500 has-checked:bg-blue-50">
            <input type="radio" name="type" value="private" className="mt-1" />
            <span>
              <span className="font-medium block">Private hosted zone</span>
              <span className="text-neutral-500">Determines how traffic is routed within a VPC.</span>
            </span>
          </label>
        </fieldset>
      </section>

      <section className="flex flex-col gap-4 p-6 border border-neutral-300 rounded bg-white">
        <div>
          <h2 className="text-lg font-semibold">Tags</h2>
          <p className="text-sm text-neutral-500">
            Apply tags to hosted zones to help organize and identify them.
          </p>
        </div>

        {tags.length === 0 ? (
          <p className="text-sm text-neutral-500">No tags associated with the resource.</p>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-[1fr_1fr_auto] gap-2 text-sm font-medium">
              <span>Key</span>
              <span>Value - optional</span>
              <span className="w-20" />
            </div>

            {tags.map((tag) => (
              <div key={tag.id} className="grid grid-cols-[1fr_1fr_auto] gap-2">
                <input
                  value={tag.key}
                  onChange={(e) => updateTag(tag.id, "key", e.target.value)}
                  placeholder="Enter key"
                  maxLength={128}
                  aria-label="Tag key"
                  className={inputClass}
                />
                <input
                  value={tag.value}
                  onChange={(e) => updateTag(tag.id, "value", e.target.value)}
                  placeholder="Enter value"
                  maxLength={256}
                  aria-label="Tag value"
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => removeTag(tag.id)}
                  className={`${btnSecondary} w-20 justify-center px-0`}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">
          <button type="button" onClick={addTag} disabled={tags.length >= MAX_TAGS} className={btnSecondary}>
            Add tag
          </button>
          <span className="text-sm text-neutral-500">
            You can add up to {MAX_TAGS - tags.length} more tags.
          </span>
        </div>
      </section>

      {error && (
        <p className="px-4 py-3 text-sm text-red-700 border border-red-300 bg-red-50 rounded">{error}</p>
      )}

      <div className="flex justify-end gap-2">
        <Link href="/hosted-zones" className={btnSecondary}>
          Cancel
        </Link>
        <button type="submit" disabled={isPending} className={btnPrimary}>
          {isPending ? "Creating..." : "Create hosted zone"}
        </button>
      </div>
    </form>
  );
}