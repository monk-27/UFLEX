import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Offering | Packaging Films Business",
  description: "Explore our wide range of high-quality films including specialty, high-barrier, and sustainable options tailored for the global packaging industry.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
