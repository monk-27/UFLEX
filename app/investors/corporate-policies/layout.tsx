import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Policies | Investor Relations",
  description: "Review the corporate policies and governance frameworks that guide UFlex's ethical and transparent business operations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
