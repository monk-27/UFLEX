import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Offering | Aseptic Packaging Business",
  description: "Explore Asepto's range of aseptic packs, including Asepto Brick, Asepto Pillow, and specialized holographic packs for premium liquid products.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
