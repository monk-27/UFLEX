import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at UFlex | Join Our Global Team",
  description: "Explore career opportunities at UFlex and be part of a dynamic, innovation-driven team shaping the future of global packaging solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
