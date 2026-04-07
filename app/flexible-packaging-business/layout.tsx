import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flexible Packaging Business | Global Packaging Solutions",
  description: "UFlex Flexible Packaging Business is a pioneer in manufacturing world-class packaging solutions for F&B, FMCG, Pharma, and more, across the global market.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
