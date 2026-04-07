import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aseptic Packaging Business | Advanced Liquid Packaging",
  description: "UFlex Aseptic Packaging Business (Asepto) provides high-quality aseptic liquid packaging solutions for juices, dairy, and spirits, ensuring freshness and safety.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
