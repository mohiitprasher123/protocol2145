// layout.tsx
import './globals.css';

export const metadata = {
  title: 'Protocol 2145',
  description: 'The Future of AI Begins Here.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}