import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IR Presentation | Quarterly Earnings",
  description: "View latest investor presentations and quarterly earnings updates providing insights into UFlex's financial performance and strategic vision.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
