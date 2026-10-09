import type { HostedZone } from "@/types/hosted-zone";
import HostedZonesTable from "./HostedZonesTable";

async function getHostedZones(): Promise<HostedZone[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/hostedzones/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch hosted zones: ${res.status}`);
  }

  return res.json();
}

export default async function HostedZonesPage() {
  const zones = await getHostedZones();

  return <HostedZonesTable zones={zones} />;
}