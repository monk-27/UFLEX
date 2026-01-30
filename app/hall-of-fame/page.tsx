"use client"

import HallPage from "@/components/hall-off-fame";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const businessFromUrl = searchParams.get("business")?.toLowerCase() || "corporate-awards";
  return <HallPage initialBusiness={businessFromUrl as any} />;
}
