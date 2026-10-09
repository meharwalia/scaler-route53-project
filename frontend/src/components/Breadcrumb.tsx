"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";


const labels: Record<string, string> = {
  "hosted-zones": "Hosted zones",
  "health-checks": "Health checks",
  records: "Records",
};

export default function Breadcrumb() {
  const pathname = usePathname(); 
  const segments = pathname.split("/").filter(Boolean); 

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Route 53
          </Link>
        </li>

        {segments.map((segment, i) => {
          const href = "/" + segments.slice(0, i + 1).join("/");
          const isLast = i === segments.length - 1;
          const text = labels[segment] ?? decodeURIComponent(segment);

          return (
            <li key={href} className="flex items-center gap-2">
              <span className="text-neutral-400">&gt;</span>
              {isLast ? (
                <span className="text-neutral-700">{text}</span>
              ) : (
                <Link href={href} className="text-blue-600 hover:underline">
                  {text}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}