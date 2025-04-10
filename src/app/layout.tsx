import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protocol 2145',
  description: 'The Future of AI Begins Here.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}