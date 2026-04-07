import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Chemicals Business",
  description: "Learn how UFlex Chemicals Business is reducing environmental footprint through water-based inks and eco-friendly adhesive solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
