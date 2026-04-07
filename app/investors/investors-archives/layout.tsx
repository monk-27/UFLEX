import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors Archives | Historical Records",
  description: "Access archived financial records, reports, and communications for UFlex investors and stakeholders.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
