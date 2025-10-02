import type { Metadata } from "next";
import { jomolhari, josefinSans } from "./fonts";
import NavBar from "@nr/components/NavBar";
import "./globals.css";

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
    <html className={`${jomolhari.variable} ${josefinSans.variable}`} lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
