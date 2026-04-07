import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Offering | Chemicals Business",
  description: "Explore our range of solvent-based and solvent-less adhesives, specialized inks, and functional coatings for diverse packaging applications.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
