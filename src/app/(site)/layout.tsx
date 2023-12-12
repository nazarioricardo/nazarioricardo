import type { Metadata } from "next";
import { jomolhari, josefinSans, josefinSlab } from "./fonts";
import "./globals.css";
import NavBar from "@nr/components/NavBar";

export const metadata: Metadata = {
  title: "Ricardo Nazario",
  description: "Ricardo's Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${jomolhari.variable} ${josefinSans.variable} ${josefinSlab.variable}`}
      lang="en"
    >
      <body className={josefinSlab.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
