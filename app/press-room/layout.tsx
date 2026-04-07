import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Room | Media Information & Resources",
  description: "Access media resources, brand assets, and official statements from UFlex. Your destination for all corporate communication materials.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
