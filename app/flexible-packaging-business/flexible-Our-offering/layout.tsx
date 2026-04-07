import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Offering | Flexible Packaging Business",
  description: "Discover our extensive range of pouches, bags, and high-performance laminates designed for freshness, long shelf life, and brand impact.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
