import Link from "next/link";

export default function PracticeLayout({
  children,
  marketingSlot,
  salesSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex  gap-10">
        <Link href="/development"> Development</Link>
        <Link href="/marketing"> Marketing</Link>
        <Link href="/marketing/setting"> Setting </Link>
        <Link href="/sales"> Sales</Link>
      </nav>
      <div className="flex ">
        {marketingSlot}
        {salesSlot}
      </div>
      {children}
    </div>
  );
}
