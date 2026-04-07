import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Environmental Commitment",
  description: "Learn about UFlex's visionary sustainability initiatives, including Project Plastic and our commitment to a circular economy in packaging.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
