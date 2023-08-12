import HeaderComponent from '@/components/header/HeaderComponent'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import FooterComponent from '@/components/footer/FooterComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FactryFact',
  description: 'FactryFact App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  )
}
