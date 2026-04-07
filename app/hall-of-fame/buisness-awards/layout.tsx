import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Awards | Hall of Fame",
  description: "Browse our timeline of business excellence awards and industry accolades received across all UFlex business divisions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
