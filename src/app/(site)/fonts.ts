import { Jomolhari, Josefin_Slab, Josefin_Sans } from "next/font/google";

export const jomolhari = Jomolhari({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jomolhari",
  display: "swap",
});

export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
});

export const josefinSlab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefin-slab",
  display: "swap",
});
