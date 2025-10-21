import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Zahari, S.Kom.I, M.Kom.I - Personal Website',
  description: 'Website pribadi Dr. Zahari - Asisten Ahli Universitas Malikussaleh, Dosen dan Peneliti Komunikasi Islam',
  keywords: 'Dr. Zahari, dosen, peneliti, komunikasi islam, akademisi, publikasi, universitas malikussaleh',
  authors: [{ name: 'Zahari' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}