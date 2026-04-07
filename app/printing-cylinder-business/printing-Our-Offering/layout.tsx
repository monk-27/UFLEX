import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Offering | Printing Cylinder Business",
  description: "Discover our precision-engraved cylinders, flexo plates, and electro-mechanical engraving services for high-quality printing results.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
