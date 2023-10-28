import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {
  Imperial_Script as Imperial_Script,
  Roboto_Flex as Roboto,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const imperialScript = Imperial_Script({
  subsets: ['latin'], variable: '--font-imperial-script',
  weight: '400'
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista de presentes',
  description: 'Lista de presentes de casamento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${imperialScript.variable}`}>{children}</body>
    </html>
  )
}
