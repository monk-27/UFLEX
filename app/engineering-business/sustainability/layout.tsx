import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Engineering Business",
  description: "Learn about UFlex Engineering's efforts in building energy-efficient machines and reducing operational waste in packaging automation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
