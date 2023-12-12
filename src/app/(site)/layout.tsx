import type { Metadata } from "next";
import { jomolhari, josefinSans, josefinSlab } from "./fonts";
import "./globals.css";
import NavBar from "@nr/components/NavBar";
import Head from "next/head";

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

        {/* Fonts for Safari iOS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body className={josefinSlab.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
