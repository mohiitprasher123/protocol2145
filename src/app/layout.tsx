import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Protocol 2145",
  description: "The Future of AI Begins Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0F172A]">{children}</body>
    </html>
  );
}