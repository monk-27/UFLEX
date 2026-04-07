import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Aseptic Packaging Business",
  description: "Learn about UFlex Asepto's commitment to sustainable liquid packaging through FSC-certified materials and efficient recycling initiatives.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
