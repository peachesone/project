import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] }) //폰트

export const metadata: Metadata = {
  title: 'Next Dev',
  description: 'This is description',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className='container'>
          <Navbar/>
          {children}
          <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
