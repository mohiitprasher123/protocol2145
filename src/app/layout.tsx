import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "Protocol 2145",
  description: "The Future of AI Begins Here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={exo2.variable}>
      <body>{children}</body>
    </html>
  );
}