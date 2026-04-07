import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Report | UFlex Financials",
  description: "Access latest and archived annual reports of UFlex Ltd, providing a detailed overview of our business performance and strategic growth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
