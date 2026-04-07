import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About UFlex | India's Largest Flexible Packaging Company",
  description: "Learn about the history, vision, and global leadership of UFlex Ltd, India's pioneer in providing integrated sustainable packaging solutions since 1985.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
