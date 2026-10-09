import Navbar from "@/components/Navbar";
import AppShell from "@/components/AppShell";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-1">
        <AppShell>{children}</AppShell>
      </div>
    </>
  );
}
