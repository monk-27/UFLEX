import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with UFlex",
  description: "Have questions or need assistance? Reach out to UFlex today. Our global teams are ready to help you with your packaging and business needs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
