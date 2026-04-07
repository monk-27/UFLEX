import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Packaging Films Business",
  description: "Learn how UFlex Packaging Films Business is driving circular economy through PCR films, recyclable solutions, and sustainable manufacturing practices.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
