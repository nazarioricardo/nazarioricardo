import type { Metadata } from "next";
import { jomolhari, josefinSans } from "./fonts";
import NavBar from "@nr/components/NavBar";
import Head from "next/head";
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
      <Head>
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1d1d1d" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#1d1d1d" />
        {/* Favicon */}
      </Head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
