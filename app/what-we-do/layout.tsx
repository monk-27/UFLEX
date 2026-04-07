import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do | Integrated Packaging Solutions",
  description: "Discover the world of UFlex and our wide range of business offerings including flexible packaging, films, aseptic packaging, chemicals, and engineering.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
