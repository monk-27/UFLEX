import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shareholders Information | Investor Services",
  description: "Find important information for UFlex shareholders, including dividend details, transfer agents, and corporate action updates.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
