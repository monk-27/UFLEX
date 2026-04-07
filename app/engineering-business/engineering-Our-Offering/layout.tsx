import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Offering | Engineering Business",
  description: "Discover our high-precision conversion and packaging equipment, including slitting machines, laminators, and printing presses.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
