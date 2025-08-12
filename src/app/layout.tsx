import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { MobileFooter } from '@/components/mobile-footer';

export const metadata: Metadata = {
  title: 'HelloJob',
  description: 'Nền tảng việc làm và phát triển sự nghiệp tại Nhật Bản',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased pb-20 md:pb-0">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileFooter />
        <Toaster />
      </body>
    </html>
  );
}
