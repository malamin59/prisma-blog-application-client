import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Analytics({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex bg-amber-400 gap-5">
        <Button> 
            <Link href='/dashboard/analytics/weekly'> Weekly </Link>
        </Button>
        <Button> 
            <Link href='/dashboard/analytics/monthly'> Monthly </Link>
        </Button>
      </div>
      {children}
    </div>
  );
}
