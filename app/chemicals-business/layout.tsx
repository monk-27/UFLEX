import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chemicals Business | Adhesives, Inks & Coatings",
  description: "UFlex Chemicals Business is a global leader in providing high-performance inks, adhesives, and coatings for the packaging and conversion industry.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
