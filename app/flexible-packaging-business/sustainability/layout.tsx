import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Flexible Packaging Business",
  description: "Learn about UFlex's sustainable flexible packaging initiatives, including 100% recyclable laminates and global plastic recycling efforts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
