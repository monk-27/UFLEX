import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IR Announcements & Updates | Investor Relations",
  description: "Stay informed with the latest official announcements, corporate updates, and stock exchange filings from UFlex Ltd.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
