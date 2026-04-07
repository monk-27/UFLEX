import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Holography Business",
  description: "Learn about UFlex Holography's commitment to sustainability through eco-friendly holographic materials and energy-efficient manufacturing processes.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
