import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packaging Films Business | Innovative Film Solutions",
  description: "UFlex Packaging Films Business provides high-performance BOPET, BOPP, and CPP films for diverse industrial and consumer packaging applications across the globe.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
