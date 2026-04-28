import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingProvider from '@/providers/LoadingProvider'

const inter = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] })

export const metadata: Metadata = { title: 'Webter' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F4F4F4] overflow-x-hidden`}>
        <LoadingProvider>
          <Navbar />
          {children}
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  )
}