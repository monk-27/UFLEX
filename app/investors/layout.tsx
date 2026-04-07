import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations | UFlex Financial Performance",
  description: "Explore UFlex investor relations, including financial results, annual reports, shareholder information, and corporate governance for transparency and growth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
