import type { Metadata } from "next";
import { Jomolhari, Josefin_Slab, Josefin_Sans } from "next/font/google";
import "./globals.css";

const jomolhari = Jomolhari({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jomolhari",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

const josefinSlab = Josefin_Slab({ subsets: ["latin"] });

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
      <body className={josefinSlab.className}>{children}</body>
    </html>
  );
}
