import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESG | Environmental, Social & Governance",
  description: "Explore our Environmental, Social, and Governance (ESG) framework and our commitment to sustainable business operations and social impact.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
