import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Offering | Holography Business",
  description: "Discover our comprehensive range of holographic solutions including security labels, foils, and films designed for maximum brand protection.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
