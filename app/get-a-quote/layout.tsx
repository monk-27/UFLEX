import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote | Custom Packaging Solutions",
  description: "Request a custom quote for your packaging requirements. UFlex offers tailored solutions for flexible packaging, films, aseptic packs, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
