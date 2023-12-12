import type { Metadata } from "next";
import { jomolhari, josefinSans, josefinSlab } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "Project",
  description: "Ricardo's Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
