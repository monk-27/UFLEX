import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flexitube Business | Specialized Tube Packaging",
  description: "UFlex Flexitube Business manufactures high-quality tubes for cosmetics, pharma, and oral care, featuring advanced barrier properties and aesthetic appeal.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
