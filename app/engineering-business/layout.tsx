import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Business | Packaging Machinery Solutions",
  description: "UFlex Engineering Business offers advanced packaging machinery including VFFS, HFFS, and CI Flexo printing machines for high-speed manufacturing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
