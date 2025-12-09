import type { Metadata } from 'next';
import './globals.css';



export const metadata: Metadata = {
  title: 'ProInvoice',
  description: 'Professional Web-Based Invoice Generator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
