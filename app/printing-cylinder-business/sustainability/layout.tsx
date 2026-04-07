import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Printing Cylinder Business",
  description: "Learn about our eco-friendly engraving processes and chromium recycling initiatives in the printing cylinder manufacturing division.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
