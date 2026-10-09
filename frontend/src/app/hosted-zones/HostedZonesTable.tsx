"use client";

import Link from "next/link";
import { useState } from "react";
import type { HostedZone } from "@/types/hosted-zone";
import { apiFetch } from "@/lib/app"

function fetchHostedZones() {
  return apiFetch<HostedZone[]>("/api/v1/hostedzones/");
}


const btn =
  "h-9 px-5 border text-sm font-medium rounded-full disabled:opacity-40 disabled:cursor-not-allowed";
const btnSecondary = `${btn} border-neutral-400 bg-white text-neutral-800 hover:bg-neutral-100`;
const btnPrimary = `${btn} border-[#FF9900] bg-[#FF9900] text-black hover:bg-[#EC7211]`;
const btnRefresh =
  "h-9 w-9 flex items-center justify-center rounded-full border border-blue-200 bg-blue-100 text-blue-700 text-lg hover:bg-blue-200";

export default function HostedZonesTable({ zones }: { zones: HostedZone[] }) {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = zones.filter((zone) =>
    zone.domain_name.toLowerCase().includes(search.toLowerCase())
  );

  const nothingSelected = selectedId === null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          Hosted zones <span className="text-neutral-500 font-normal">({zones.length})</span>
        </h1>

        <div className="flex items-center gap-2">
          <button className={`${btnRefresh} w-9 px-0`} aria-label="Refresh">
            ↻
          </button>
          <button className={btnSecondary} disabled={nothingSelected}>
            View details
          </button>
          <button className={btnSecondary} disabled={nothingSelected}>
            Edit
          </button>
          <button className={btnSecondary} disabled={nothingSelected}>
            Delete
          </button>
          <button className={btnPrimary}>Create hosted zone</button>
        </div>
      </div>

      <input
        type="search"
        placeholder="Filter hosted zones by domain name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-sm h-9 px-3 border border-neutral-300 text-sm outline-none focus:ring-2 focus:ring-blue-500"
      />

      <table className="w-full text-sm border border-neutral-300">
        <thead className="bg-neutral-100 text-left">
          <tr>
            <th className="w-10 px-4 py-2" />
            <th className="px-4 py-2 font-medium">Hosted zone name</th>
            <th className="px-4 py-2 font-medium">Type</th>
            <th className="px-4 py-2 font-medium">Description</th>
            <th className="px-4 py-2 font-medium">Hosted zone ID</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((zone) => (
            <tr
              key={zone.id}
              onClick={() => setSelectedId(zone.id)}
              className={`border-t border-neutral-200 cursor-pointer ${
                selectedId === zone.id ? "bg-blue-50" : "hover:bg-neutral-50"
              }`}
            >
              <td className="px-4 py-2">
                <input
                  type="radio"
                  name="selectedZone"
                  checked={selectedId === zone.id}
                  onChange={() => setSelectedId(zone.id)}
                  aria-label={`Select ${zone.domain_name}`}
                />
              </td>
              <td className="px-4 py-2">
                <Link
                  href={`/hosted-zones/${zone.id}`}
                  className="text-blue-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {zone.domain_name}
                </Link>
              </td>
              <td className="px-4 py-2 capitalize">{zone.type}</td>
              <td className="px-4 py-2">{zone.description ?? "-"}</td>
              <td className="px-4 py-2">{zone.id}</td>
            </tr>
          ))}

          {filtered.length === 0 && (
            <tr>
              <td colSpan={5} className="px-4 py-6 text-center text-neutral-500">
                {zones.length === 0 ? "No hosted zones yet" : `No hosted zones match "${search}"`}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}