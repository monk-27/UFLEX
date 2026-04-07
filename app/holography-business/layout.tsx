import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holography Business | Brand Protection & Anti-Counterfeiting Solutions",
  description: "Explore UFlex Holography Business for advanced anti-counterfeiting solutions, holographic films, and brand protection technology to secure your products globally.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
