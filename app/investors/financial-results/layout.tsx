import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Results | Investor Relations",
  description: "View latest quarterly and annual financial results, balance sheets, and profit & loss statements of UFlex Ltd.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
