import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Releases | Latest News from UFlex",
  description: "Stay up to date with the latest official news, company announcements, and media releases from UFlex Ltd.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
