import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Coverage | UFlex in the News",
  description: "Browse articles, features, and coverage of UFlex across global news platforms and industry publications.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
