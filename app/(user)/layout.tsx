import Header from '@/components/Header'
import { Analytics } from '@vercel/analytics/react';
import '../globals.css'
import Banner from '@/components/Banner'

export const metadata = {
  title: 'Code-Info',
  description: 'Code-Info a place for every programmer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='max-w-7xl mx-auto'>
        <Header/>
        <Banner/>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
