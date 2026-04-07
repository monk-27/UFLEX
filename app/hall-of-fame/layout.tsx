import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hall of Fame | Awards & Recognition",
  description: "Explore the prestigious awards and global recognitions UFlex has received for innovation, sustainability, and excellence in packaging.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
