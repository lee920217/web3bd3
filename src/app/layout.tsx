import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/CommonHeader/CommonHeader";
import ApplyProvider from "@/contexts/ApplyProvider";
import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme/theme';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BD3',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <ThemeProvider theme={theme}>
          <ApplyProvider>
              <Header />
              {children}
          </ApplyProvider>
      </ThemeProvider>
      </body>
    </html>
  )
}
