import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSR | Corporate Social Responsibility",
  description: "Learn about UFlex's CSR initiatives focused on community development, healthcare, education, and social welfare.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
