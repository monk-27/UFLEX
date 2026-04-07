import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printing Cylinder Business | Gravure & Flexo Cylinders",
  description: "UFlex Printing Cylinder Business is a leading manufacturer of high-quality rotogravure cylinders and flexo plates for the printing industry.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
