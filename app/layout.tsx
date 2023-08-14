import './globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeaderComponent from '@/components/header/HeaderComponent';
import type { Metadata } from 'next';
import FooterComponent from '@/components/footer/FooterComponent';

export const metadata: Metadata = {
  title: 'FactryFact',
  description: 'FactryFact App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        <div className="children-container">{children}</div>
        <FooterComponent />
      </body>
    </html>
  );
}
